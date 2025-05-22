import { Component } from '@angular/core';

interface Supplier {
  name: string;
  startDate?: string;
  endDate?: string;
  visible: boolean;
  primaryContract?: string;
  contractModifier?: string;
  contractStartDate?: string;
  contractEndDate?: string;
  associatedSupplier?: string;
  compliancePercentage?: number;
  supplierDisplayName?: string;
  impactFeePercentage?: number;
  impactFeeStartDate?: string;
  impactFeeEndDate?: string;
  supplierStartDate?: string;
  supplierEndDate?: string;
}

interface Category {
  name: string;
  startDate?: string;
  endDate?: string;
  visible: boolean;
  suppliers: Supplier[];
}

interface Program {
  name: string;
  startDate?: string;
  endDate?: string;
  visible: boolean;
  optOuts?: string;
  programType?: string;
  compliance?: number;
  predecessorProgram?: string;
  accountNumber?: string;
  accountDescription?: string;
  checkProcessOrder?: string;
  processLevel?: string;
  categories: Category[];
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  programs: Program[] = [
    {
      name: 'Feathered Funds',
      visible: true,
      categories: [
        {
          name: 'Gosling Growth',
          visible: true,
          suppliers: [
            { name: 'Honker Holdings', visible: true },
            { name: 'Downy Deposits', visible: true }
          ]
        },
        {
          name: 'Winged Wealth',
          visible: true,
          suppliers: [
            { name: 'Beak Bank', visible: true }
          ]
        }
      ]
    },
    {
      name: 'Honk-Savvy Savings',
      visible: true,
      categories: [
        {
          name: 'Quill Credits',
          visible: true,
          suppliers: [
            { name: 'Feather Finance', visible: true },
            { name: 'Gander Gold', visible: true }
          ]
        },
        {
          name: 'Flock Futures',
          visible: true,
          suppliers: [
            { name: 'Goose Gilt', visible: true }
          ]
        }
      ]
    }
  ];
  selectedProgramIndex: number | null = null;
  selectedCategoryIndex: number | null = null;
  selectedSupplierIndex: number | null = null;

  get selectedProgram(): Program | null {
    return this.selectedProgramIndex !== null ? this.programs[this.selectedProgramIndex] : null;
  }

  get selectedCategory(): Category | null {
    const program = this.selectedProgram;
    if (!program || this.selectedCategoryIndex === null) {
      return null;
    }
    return program.categories[this.selectedCategoryIndex];
  }

  get selectedSupplier(): Supplier | null {
    const category = this.selectedCategory;
    if (!category || this.selectedSupplierIndex === null) {
      return null;
    }
    return category.suppliers[this.selectedSupplierIndex];
  }

  addProgram() {
    this.programs.push({ name: 'New Program', visible: true, categories: [] });
    this.selectedProgramIndex = this.programs.length - 1;
    this.selectedCategoryIndex = null;
    this.selectedSupplierIndex = null;
  }

  selectProgram(index: number) {
    this.selectedProgramIndex = index;
    this.selectedCategoryIndex = null;
    this.selectedSupplierIndex = null;
  }

  addCategory() {
    const program = this.selectedProgram;
    if (program) {
      program.categories.push({ name: 'New Category', visible: true, suppliers: [] });
      this.selectedCategoryIndex = program.categories.length - 1;
      this.selectedSupplierIndex = null;
    }
  }

  selectCategory(index: number) {
    this.selectedCategoryIndex = index;
    this.selectedSupplierIndex = null;
  }

  addSupplier() {
    const category = this.selectedCategory;
    if (category) {
      category.suppliers.push({ name: 'New Supplier', visible: true });
      this.selectedSupplierIndex = category.suppliers.length - 1;
    }
  }

  selectSupplier(index: number) {
    this.selectedSupplierIndex = index;
  }
}
