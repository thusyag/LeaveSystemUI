import { UserLeaveHistoryComponent } from './Components/user-leave-history/user-leave-history.component';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SideNavComponent } from './Shared/side-nav/side-nav.component';
import { TopNavComponent } from './Shared/top-nav/top-nav.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { LeaveHistoryComponent } from './Components/leave-history/leave-history.component';
import { RemainLeaveComponent } from './Components/remain-leave/remain-leave.component';
import { CarryForwardComponent } from './Components/carry-forward/carry-forward.component';
import { LoginComponent } from './login/login.component';
import { CalendarComponent } from './Shared/calendar/calendar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { PendingReqComponent } from './Components/pending-req/pending-req.component';
import { ReqHistoryComponent } from './Components/req-history/req-history.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { PrevilageComponent } from './Components/previlage/previlage.component';
import { AddRoleComponent } from './Components/add-role/add-role.component';
import { AddDepartmentComponent } from './Components/add-department/add-department.component';
import { AddLeaveTypeComponent } from './Components/add-leave-type/add-leave-type.component';
import { AdminComponent } from './admin/admin.component';
import { ViewDepartmentComponent } from './Components/view-department/view-department.component';
import { ViewRoleComponent } from './Components/view-role/view-role.component';
import { ViewLeaveTypeComponent } from './Components/view-leave-type/view-leave-type.component';
import { AddHolidayComponent } from './Components/add-holiday/add-holiday.component';
import { EditHolidayComponent } from './Components/edit-holiday/edit-holiday.component';
import { ViewHolidayComponent } from './Components/view-holiday/view-holiday.component';
import { AddStatusComponent } from './Components/add-status/add-status.component';
import { EditStatusComponent } from './Components/edit-status/edit-status.component';
import { EditDepartmentComponent } from './Components/edit-department/edit-department.component';
import { EditRoleComponent } from './Components/edit-role/edit-role.component';
import { EditLeaveTypeComponent } from './Components/edit-leave-type/edit-leave-type.component';
import { HttpClientModule } from '@angular/common/http';
import { LeaveTypeService } from './services/leave-type.service';
import { ViewStatusComponent } from './Components/view-status/view-status.component';
import { EditUserComponent } from './Components/edit-user/edit-user.component';
import { StatusService } from './services/status.service';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TopNavComponent,
    LeaveHistoryComponent,
    RemainLeaveComponent,
    CarryForwardComponent,
    LoginComponent,
    CalendarComponent,
    FooterComponent,
    PendingReqComponent,
    ReqHistoryComponent,
    AddUserComponent,
    UserProfileComponent,
    RoutingComponents,
    PrevilageComponent,
    AddRoleComponent,
    AddDepartmentComponent,
    AddLeaveTypeComponent,
    AdminComponent,
    ViewDepartmentComponent,
    ViewRoleComponent,
    ViewLeaveTypeComponent,
    AddHolidayComponent,
    EditHolidayComponent,
    ViewHolidayComponent,
    AddStatusComponent,
    EditStatusComponent,
    EditDepartmentComponent,
    EditRoleComponent,
    EditLeaveTypeComponent,
    RoutingComponents,
    ViewStatusComponent,
    EditUserComponent,
    UserLeaveHistoryComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    LeaveTypeService,
    StatusService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
