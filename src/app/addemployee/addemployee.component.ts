import { Component } from '@angular/core';
import { Employeeservice } from '../services/employeeservice.service';
import { Router } from '@angular/router';
import { Employee } from '../entity/Employee';
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent  {
firstname:string;
  lastname:string;
  age:number;
  designation:string;
employee: Employee;

  constructor(private employeeService: Employeeservice, private router: Router) { }
 saveEmployee(){
    this.employee = new Employee(this.makeRandomID(), this.firstname, this.lastname, this.age, this.designation);
    this.employeeService.addEmployee(this.employee);
    this.router.navigate(["Employees"]);
  }

  // Method to cancel the add operation
  cancelEmployee(){
    this.router.navigate(["Employees"]);
  }

  // Creates random id for employee
  makeRandomID(): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}