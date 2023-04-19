import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchJobsComponent } from './search-jobs/search-jobs.component';

const routes: Routes = [
  {path:'search',
  component: SearchJobsComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsFeatureRoutingModule { }
