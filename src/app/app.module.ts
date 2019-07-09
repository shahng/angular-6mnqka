import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { RouterModule, Routes } from '@angular/router';
import { Employeeservice } from './services/employeeservice.service';
import {InputTextModule} from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';





const routes: Routes = [
  { path:"Employees", component:EmployeelistComponent  },
  { path:"AddEmployee", component:AddemployeeComponent },
  { path:"EditEmployee/:id", component:EditemployeeComponent },
  { path:"**", redirectTo:'Employees' },
]



@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule,FormsModule,ButtonModule,
    DropdownModule,
    PanelModule,
    CardModule,
    InputTextModule,
RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"}) ],
  declarations: [ AppComponent, AddemployeeComponent, EditemployeeComponent, EmployeedetailComponent, EmployeelistComponent ],

  bootstrap:    [ AppComponent ],
  providers: [ Employeeservice ]
})
export class AppModule { }
