import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employeeservice } from '../services/employeeservice.service';
import { Router } from '@angular/router';
import { Employee } from '../entity/Employee';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent {
// Input variable to display properties of an employee
  @Input() employee: Employee;

  // Output variable used to tell the parent component to refesh the employee list after successful delete
  @Output() refreshEmployeeList: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  // Service injected in constructor
  constructor(private employeeService: Employeeservice, private router: Router) { 
  }

  // Method to edit employee details
  editEmployee(){
    this.router.navigate(["EditEmployee/"+ this.employee.id]);
  }
  
  // Method to delete an employee
  deleteEmployee(employeeToBeDeleted: Employee){
    var result = confirm("Are you sure, you want to delete this Employee?");
    if (result) {
      this.employeeService.deleteEmployee(this.employee.id);
      this.refreshEmployeeList.emit(true);
      this.router.navigate(["Employees"]);
    } 
  }
}