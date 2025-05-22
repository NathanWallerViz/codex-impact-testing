import { Component } from '@angular/core';

interface Filter {
  system?: string;
  primary?: string;
  program?: string;
  category?: string;
  status?: string;
  supplier?: string;
}

interface VibeRow {
  vibeId: string;
  primaryId: string;
  primaryName: string;
  programName: string;
  categoryName: string;
  supplierName: string;
  validationStatus: string;
  annualPotential: string;
}

@Component({
  selector: 'app-vibeidation-search',
  templateUrl: './vibeidation-search.component.html',
  styleUrls: ['./vibeidation-search.component.css']
})
export class VibeidationSearchComponent {
  system = '';
  primary = '';
  program = '';
  category = '';
  status = '';
  supplier = '';

  filters: Filter[] = [];

  tableData: VibeRow[] = [
    {
      vibeId: 'V-100',
      primaryId: 'P-200',
      primaryName: 'Primary Vibe',
      programName: 'Goose Growth',
      categoryName: 'Feather Finance',
      supplierName: 'Honker Holdings',
      validationStatus: 'Validated',
      annualPotential: '$10,000'
    }
  ];

  addFilter() {
    if (
      this.system ||
      this.primary ||
      this.program ||
      this.category ||
      this.status ||
      this.supplier
    ) {
      this.filters.push({
        system: this.system,
        primary: this.primary,
        program: this.program,
        category: this.category,
        status: this.status,
        supplier: this.supplier
      });
      this.system = '';
      this.primary = '';
      this.program = '';
      this.category = '';
      this.status = '';
      this.supplier = '';
    }
  }

  clearFilters() {
    this.filters = [];
  }
}
