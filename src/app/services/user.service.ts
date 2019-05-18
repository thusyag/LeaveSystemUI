import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/user';
// Import the model file


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  // constructor() { }
  private userUrl = 'http://localhost:8080/hrm_system/user';

  // Get All Department
  public getAllUser() {
    return this.http.get<User[]>(this.userUrl);
  }
  // public deleteDepartment(Department) {
  //   return this.http.delete(this.userUrl + "/"+ Department.id);
  // }
  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }

  public updateUser(user) {
    return this.http.put<User>(this.userUrl + '/' + user.id, user);
  }
}
