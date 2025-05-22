import { Component, OnInit } from '@angular/core';

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

interface ParticipationVibe {
  name: string;
  version: string;
  uploadedDate: string;
  uploadedBy: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  currentTab: 'setup' | 'quarter' | 'participation' = 'setup';
  lastLockdownDate: string | null = null;
  lastCloseDate: string | null = null;
  quarterAction: 'lockdown' | 'close' = 'lockdown';
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
  participationVibes: ParticipationVibe[] = [
    {
      name: 'Super Goose Mode',
      version: '1.0',
      uploadedDate: '2023-09-01',
      uploadedBy: 'AdminUser'
    },
    {
      name: 'Feather Flair',
      version: '1.1',
      uploadedDate: '2023-09-10',
      uploadedBy: 'VibeMaster'
    },
    {
      name: 'Honker Harmony',
      version: '2.0',
      uploadedDate: '2023-09-15',
      uploadedBy: 'GooseGuru'
    }
  ];
  selectedProgramIndex: number | null = null;
  selectedCategoryIndex: number | null = null;
  selectedSupplierIndex: number | null = null;

  ngOnInit() {
    if (this.programs.length > 0) {
      this.selectedProgramIndex = 0;
      if (this.programs[0].categories.length > 0) {
        this.selectedCategoryIndex = 0;
        if (this.programs[0].categories[0].suppliers.length > 0) {
          this.selectedSupplierIndex = 0;
        }
      }
    }
  }

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
    const program = this.selectedProgram;
    if (program && program.categories.length > 0) {
      this.selectCategory(0);
    } else {
      this.selectedCategoryIndex = null;
      this.selectedSupplierIndex = null;
    }
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
    const category = this.selectedCategory;
    if (category && category.suppliers.length > 0) {
      this.selectedSupplierIndex = 0;
    } else {
      this.selectedSupplierIndex = null;
    }
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

  addParticipationVibe() {
    this.participationVibes.push({
      name: 'New Vibe',
      version: '1.0',
      uploadedDate: new Date().toLocaleDateString(),
      uploadedBy: 'You'
    });
  }

  handleQuarterAction() {
    const today = new Date().toLocaleDateString();
    if (this.quarterAction === 'lockdown') {
      this.lastLockdownDate = today;
      this.quarterAction = 'close';
    } else {
      this.lastCloseDate = today;
      this.quarterAction = 'lockdown';
    }
  }
}
