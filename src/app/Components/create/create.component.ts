import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeModel } from 'src/app/employeeModel';
import { EmployeesService } from 'src/app/employees.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  CreateComponent = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    department: new FormControl(''),
    gender: new FormControl(''),
    cellphone: new FormControl(''),
    salary: new FormControl(''),
    address: new FormControl(''),
  });


employee: EmployeeModel = new EmployeeModel();
  constructor(private employeesService: EmployeesService,
    private router: Router) { }

  ngOnInit(): void {
   }

  saveEmployee(){
    this.employeesService.createEmployee(this.CreateComponent.value).subscribe( data =>{
      console.log(data);
      this.goToEmployee();
    },
    error => console.log(error));
  }

  goToEmployee(){
    this.router.navigate(['/employee']);
  }
  
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }


  }


