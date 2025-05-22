import { Component } from '@angular/core';

interface VibeInfo {
  name: string;
  id: string;
  system: string;
  systemId: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

@Component({
  selector: 'app-vibe-management',
  templateUrl: './vibe-management.component.html',
  styleUrls: ['./vibe-management.component.css']
})
export class VibeManagementComponent {
  systemId = '';
  memberId = '';
  showSearchButton = false;
  searchResults: VibeInfo | null = null;
  showUploadCard = false;
  selectedAgreement: string | null = null;

  onInputChange() {
    this.showSearchButton = !!this.systemId.trim() || !!this.memberId.trim();
  }

  search() {
    this.searchResults = {
      name: 'Vibe ' + Math.floor(Math.random() * 1000),
      id: Math.floor(Math.random() * 100000).toString(),
      system: 'System ' + (this.systemId || Math.floor(Math.random() * 10)),
      systemId: (this.systemId || 'SYS-' + Math.floor(Math.random() * 1000)),
      address: Math.floor(Math.random() * 1000) + ' Vibe St.',
      city: 'Vibeville',
      state: 'VS',
      zip: (10000 + Math.floor(Math.random() * 89999)).toString()
    };
    this.showUploadCard = false;
  }

  openUploadCard() {
    this.showUploadCard = true;
  }

  cancelUpload() {
    this.showUploadCard = false;
    this.selectedAgreement = null;
  }

  completeVibe() {
    // Placeholder for completion logic
    this.showUploadCard = false;
    this.selectedAgreement = null;
  }
}
