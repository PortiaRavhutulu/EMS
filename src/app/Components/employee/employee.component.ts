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
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // employee: EmployeeModel[] = [];

  // constructor(private employeesService: EmployeesService,
  //   private router: Router) { }

  // ngOnInit(): void {
  //   this.getEmployees();
  // }

  // private getEmployees(){
  //   this.employeesService.getEmployees().subscribe(data => {
  //     this.employee = data;
  //   });
  // }

  // employeeDetails(id: number){
  //   this.router.navigate(['employee', id]);
  // }

  // updateEmployee(id: number){
  //   this.router.navigate(['update', id]);
  // }

  // deleteEmployee(id: number){
  //   this.employeesService.deleteEmployee(id).subscribe( data => {
  //     console.log(data);
  //     this.getEmployees();
  //   })
  // }

}
