import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { VibeManagementComponent } from './vibe-management/vibe-management.component';
import { VibeidationSearchComponent } from './vibeidation-search/vibeidation-search.component';
import { VibeDistributionComponent } from './vibe-distribution/vibe-distribution.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'vibe-management', component: VibeManagementComponent },
  { path: 'vibeidation-search', component: VibeidationSearchComponent },
  { path: 'vibe-distribution', component: VibeDistributionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminComponent,
    VibeManagementComponent,
    VibeidationSearchComponent,
    VibeDistributionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
