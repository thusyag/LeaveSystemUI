import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http: HttpClient) { }

  private levaeUrl = 'http://localhost:8080/hrm_system/leave';

  public getRemainingLeaveByUserIdAndLeaveType(userId, leaveTypeId) {
    return this.http.get<number>(this.levaeUrl + '/' + userId + '/' + leaveTypeId);
  }
  public getRemainingLeaveByUserId(userId) {
    return this.http.get<number>(this.levaeUrl + '/' + userId);
  }

}


