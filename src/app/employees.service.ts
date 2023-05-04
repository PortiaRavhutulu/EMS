import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { EmployeeModel } from './employeeModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private baseURL = "http://localhost:8080/employees";

  constructor(private httpClient: HttpClient) { }
  
  getEmployees(): Observable<EmployeeModel[]>{
    return this.httpClient.get<EmployeeModel[]>(`${this.baseURL}`);
  }

  createEmployee(val:any): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, val);
  }

  getEmployeeById(id: number): Observable<EmployeeModel>{
    return this.httpClient.get<EmployeeModel>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: EmployeeModel): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
