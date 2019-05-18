import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewLeaveType } from '../Models/view-leave-type.model';
import { AddLeaveType } from '../Models/add-leave-type';
import { AddLeaveTypeComponent } from '../Components/add-leave-type/add-leave-type.component';


@Injectable({
  providedIn: 'root'
})
export class LeaveTypeService {

  constructor(private http: HttpClient) {}

  private viewLeaveTypeUrl = 'http://localhost:8080/hrm_system/leavetype';

  public getLeaveType() {
    return this.http.get<ViewLeaveType[]>(this.viewLeaveTypeUrl);
  }

  public deleteLeaveType(leaveType) {
    return this.http.delete<ViewLeaveType>(this.viewLeaveTypeUrl + '/' + leaveType.id, leaveType);
  }

  public addLeaveType(leaveType) {
    return this.http.post<AddLeaveType>(this.viewLeaveTypeUrl, leaveType);
  }

  public updateLeaveType(leaveType) {
    return this.http.put<AddLeaveType>(this.viewLeaveTypeUrl + '/' + leaveType.id, leaveType);
  }
}
