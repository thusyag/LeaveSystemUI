import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Department } from '../Models/department';

@Injectable({
  providedIn: 'root'
})


export class DepartmentService {

  constructor(private http: HttpClient) { }

  private departmentUrl = 'http://localhost:8080/hrm_system/department';

  public getDepartment() {
    return this.http.get<Department[]>(this.departmentUrl);
  }

  public updateDepartment(department) {
    return this.http.put<Department>(this.departmentUrl + '/' + department.id, department);
  }

  public deleteDepartment(department) {
    return this.http.delete<Department>(this.departmentUrl + '/' + department.id, department);
  }

  public addDepartment(department) {
    return this.http.post<Department[]>(this.departmentUrl, department);
  }
}
