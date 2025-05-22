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

interface ProgramInfo {
  activeVibes: string;
  status: string;
  compliance: string;
  rebate: string;
  average: string;
}

interface Hospital {
  name: string;
  programs: ProgramInfo[];
}

@Component({
  selector: 'app-vibe-management',
  templateUrl: './vibe-management.component.html',
  styleUrls: ['./vibe-management.component.css']
})
export class VibeManagementComponent {
  currentTab: 'signup' | 'config' = 'signup';

  systemId = '';
  memberId = '';
  showSearchButton = false;
  searchResults: VibeInfo | null = null;
  showUploadCard = false;
  selectedAgreement: string | null = null;

  configSystemId = '';
  configMemberId = '';
  configShowSearchButton = false;

  hospitals: Hospital[] = [
    {
      name: 'General Hospital',
      programs: [
        {
          activeVibes: 'Vibe A',
          status: 'Active',
          compliance: '95%',
          rebate: '$1,000',
          average: '92%'
        }
      ]
    },
    {
      name: 'City Medical Center',
      programs: [
        {
          activeVibes: 'Vibe B',
          status: 'Pending',
          compliance: '88%',
          rebate: '$800',
          average: '85%'
        }
      ]
    }
  ];

  onInputChange() {
    this.showSearchButton = !!this.systemId.trim() || !!this.memberId.trim();
  }

  onConfigInputChange() {
    this.configShowSearchButton =
      !!this.configSystemId.trim() || !!this.configMemberId.trim();
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

  searchConfig() {
    // placeholder for config search
  }

  newConfiguration() {
    // placeholder for creation logic
  }

  memberSignUpReport(h: Hospital) {
    // placeholder for report logic
  }

  programActivation(h: Hospital) {
    // placeholder for activation logic
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
