import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../Models/role.model';
@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(private http: HttpClient) { } // Create constructor like java!
  private roleUrl = 'http://localhost:8080/hrm_system/role';
  // Get All Department
  public getAllRoles() {
    return this.http.get<Role[]>(this.roleUrl); // here we use get method if we use post then we have to use it on "post"
  }
  public deleteRole(role) {
    return this.http.delete<Role>(this.roleUrl + '/' + role.id);
  }

  public editRole(role) {
    return this.http.put<Role>(this.roleUrl + '/' + role.id, role);
  }

  public adddRole(role) {
    return this.http.post<Role[]>(this.roleUrl, role);
  }
}
