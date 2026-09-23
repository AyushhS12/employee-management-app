import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { SharedModule } from '../shared/shared.module';
import { RouterOutlet } from '@angular/router';
import { EmployeeRouterModule } from './employee.router.module';
import { EmployeeRouterComponent } from './employee.router.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component'


@NgModule({
  declarations: [
    // EmployeeCardComponent,
    AddEmployeeComponent,
    EmployeeRouterComponent,
    EmployeeListComponent,
    ProfileComponent
  ],
  imports: [
    SharedModule,
    RouterOutlet,
    HttpClientModule,
    EmployeeRouterModule,
  ],
})
export class EmployeeModule { }
