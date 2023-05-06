import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/employeeModel';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/employees.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
// details: any;
empId?: any;
employees: any;

constructor(private employeeService:EmployeesService, private route: ActivatedRoute){
  this.route.paramMap.subscribe(paraMap => {
    this.empId = paraMap.get('empId')
  })
}
  ngOnInit(): void {
    // throw new Error('Method not implemented.'); 
    this.getEmployeeById();
  }

  getEmployeeById() {
    console.log(localStorage.getItem('id'))
    this.employeeService.getEmployeeById(localStorage.getItem('id')).subscribe((data:any) => {
      console.log(data);
      this.employees = data;
      console.log(this.employees.firstName);
      
    })
  }

  


  // id?: any;
  // employee: Employee = new Employee();
  // id = this.route.snapshot.params['id']; 
  
    // this.route.paramMap.subscribe(paraMap => {
      // console.log(paraMap.get('id'))
  //     this.id = paraMap.get('id')
  //   })
  // }
  // ngOnInit(): void {
    
  // }
  
  // id!: number;
  // employee!: EmployeeModel;
  // constructor(private route: ActivatedRoute, private employeesService: EmployeesService) { }

  // ngOnInit(): void {
  //   this.id = this.route.snapshot.params['id'];

  //   this.employee = new EmployeeModel();
  //   this.employeesService.getEmployeeById(this.id).subscribe( data => {
  //     this.employee = data;
  //   });
  // }

}
