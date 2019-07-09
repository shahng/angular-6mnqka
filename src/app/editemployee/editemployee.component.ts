import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../entity/Employee';
import { ActivatedRoute } from '@angular/router';
import { Employeeservice } from '../services/employeeservice.service';
import { Router } from '@angular/router/';
@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

employee: Employee;

  constructor(private employeeService: Employeeservice, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {var id = this.route.snapshot.params["id"];
    this.employee = this.employeeService.getEmployee(id);
  }

  // Method to update and employee
  updateEmployee(){
    this.employeeService.updateEmployee(this.employee);
    this.router.navigate(["Employees"]);
  }

  // Method to cancel update employee operation
  cancelEmployee(){
    this.router.navigate(["Employees"]);
}
  }

