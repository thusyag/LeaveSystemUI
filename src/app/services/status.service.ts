import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Status } from '../Models/status.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class StatusService {
  constructor(private http: HttpClient) { }
  // constructor() { }
  private statusUrl = 'http://localhost:8080/hrm_system/status';

  //Get All Department
  public getAllStatus() {
    return this.http.get<Status[]>(this.statusUrl);
  }
  public createStatus(status) {
    return this.http.post<Status>(this.statusUrl, status);

  }
  public deleteStatus(status) {
    return this.http.delete<Status>(this.statusUrl + '/' + status.id, status);
  }
  public updateStatus(status) {
    return this.http.put<Status>(this.statusUrl + '/' + status.id, status);
  }
}
