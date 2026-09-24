import { NgModule } from '@angular/core';

// import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { SharedModule } from '../shared/shared.module';
import { RouterOutlet } from '@angular/router';
import { EmployeeRouterModule } from './employee.router.module';
import { EmployeeRouterComponent } from './employee.router.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ProfileComponent } from './components/profile/profile.component'
import { MatButtonModule } from '@angular/material/button';


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
    EmployeeRouterModule,
    MatButtonModule
],
})
export class EmployeeModule { }
