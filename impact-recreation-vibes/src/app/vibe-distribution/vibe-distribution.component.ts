import { Component } from '@angular/core';

interface DistributionFilter {
  impactCategory: string;
  distributor: string;
  productDescription: string;
  distributorCatalogNumber: string;
  distCat1: string;
  distCat2: string;
  distCat3: string;
  distCat4: string;
}

interface TableRow {
  selected?: boolean;
  impactCategory: string;
  distCat1: string;
  distCat2: string;
  distCat3: string;
  distCat4: string;
  productDescription: string;
  packageSize: string;
  distributorName: string;
  distributorCatalogNumber: string;
  gtin: string;
  spend: string;
}

@Component({
  selector: 'app-vibe-distribution',
  templateUrl: './vibe-distribution.component.html',
  styleUrls: ['./vibe-distribution.component.css']
})
export class VibeDistributionComponent {
  impactCategory = '';
  distributor = '';
  productDescription = '';
  distributorCatalogNumber = '';
  distCat1 = '';
  distCat2 = '';
  distCat3 = '';
  distCat4 = '';

  categorySelection = '';
  selectAll = false;

  filters: DistributionFilter[] = [];
  tableData: TableRow[] = [];

  addFilter() {
    if (
      this.impactCategory ||
      this.distributor ||
      this.productDescription ||
      this.distributorCatalogNumber ||
      this.distCat1 ||
      this.distCat2 ||
      this.distCat3 ||
      this.distCat4
    ) {
      this.filters.push({
        impactCategory: this.impactCategory,
        distributor: this.distributor,
        productDescription: this.productDescription,
        distributorCatalogNumber: this.distributorCatalogNumber,
        distCat1: this.distCat1,
        distCat2: this.distCat2,
        distCat3: this.distCat3,
        distCat4: this.distCat4
      });
      this.tableData = [
        {
          impactCategory: 'IC 1',
          distCat1: 'D1',
          distCat2: 'D2',
          distCat3: 'D3',
          distCat4: 'D4',
          productDescription: 'Sample product',
          packageSize: '1 each',
          distributorName: 'Sample Distr',
          distributorCatalogNumber: '1234',
          gtin: '000111222',
          spend: '$100'
        }
      ];
      this.impactCategory = '';
      this.distributor = '';
      this.productDescription = '';
      this.distributorCatalogNumber = '';
      this.distCat1 = '';
      this.distCat2 = '';
      this.distCat3 = '';
      this.distCat4 = '';
    }
  }

  vibeSelection() {
    // placeholder for vibe action
  }
}
