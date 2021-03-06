import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NoteComponentComponent} from './note-component/note-component.component';
import {ReportComponentComponent} from './report-component/report-component.component';
import {LoginComponent} from '../app/login/login.component';
import {SiteTabularComponent} from '../app/site-tabular/site-tabular.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full',
  },{
    path:'Login',
    component:LoginComponent
  },
  {
    path:'Dashboard',
    component:DashboardComponent
  },{
    path:'Note',
    component:NoteComponentComponent
  },{
    path:'Report',
    component:ReportComponentComponent
  },{
    path:'Site/Tabular',
    component:SiteTabularComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
