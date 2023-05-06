import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/employeeModel';
import { EmployeesService } from 'src/app/employees.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  details: any;
  // Constructor injection
  constructor(private service: EmployeesService) {
    }
  ngOnInit(): any {
    // Calling method
    this.showEmployees();
  }

  // Method to show all employees and call the service
  showEmployees(){
     return this.service.getEmployees().subscribe(result => {
      this.details = result;
      console.log(this.details)});
  }

  setId(id: any){
    localStorage.setItem('id', id);
  }



  
  }




