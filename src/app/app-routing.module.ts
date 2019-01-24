import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{BasicformComponent} from './basicform/basicform.component';
import {TemplateformComponent} from './templateform/templateform.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/templateform' },
  {path: 'basicform', component:BasicformComponent  },
  {path: 'templateform', component:TemplateformComponent },
  {path:'users',component:UsersComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule]
})
export class AppRoutingModule { 
  static components = [  
  
];
}