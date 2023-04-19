import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'dashboard', loadChildren:() => import('../../shell-feature/shell-feature.module').then(m=>m.ShellFeatureModule)},
  {path:'jobs', loadChildren:() => loadRemoteModule(
    {
      type:"module",
      remoteEntry:"http://localhost:30001/remoteEntry.js",
      exposedModule:"./module"
    }
  ).then((m)=>m.JobsFeatureModule)}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
