import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JobsFeatureModule } from 'projects/jobs/jobs-feature/jobs-feature.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { SearchJobComponent } from './feature/search-job/search-job.component';
import { CompanyComponent } from './feature/company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchJobComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    JobsFeatureModule,
    RouterModule.forRoot(
			[
				{
					path: 'address-form',
					loadChildren: () =>
						loadRemoteModule({
							type: 'module',
							remoteEntry: 'http://localhost:4201/remoteEntry.js',
							exposedModule: 'FormModule',
						}).then((m) => m.FormModule),
				},
			],
			{ initialNavigation: 'enabledBlocking' }
		),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
