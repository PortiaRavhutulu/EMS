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
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
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
