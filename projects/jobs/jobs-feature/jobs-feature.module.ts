import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsFeatureRoutingModule } from './jobs-feature-routing.module';
import { SearchJobsComponent } from './search-jobs/search-jobs.component';


@NgModule({
  declarations: [
    SearchJobsComponent
  ],
  imports: [
    CommonModule,
    JobsFeatureRoutingModule
  ]
})
export class JobsFeatureModule { }
