import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { DepartmentRouterComponent } from './department.router.component';
import { RouterOutlet } from '@angular/router';
import { DepartmentRouterModule } from './department.router.module';
import { SharedModule } from '../shared/shared.module';
import { DepartmentTableComponent } from './components/department-table/department-table.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';



@NgModule({
  declarations: [
    AddDepartmentComponent,
    DepartmentListComponent,
    DepartmentRouterComponent,
    DepartmentTableComponent,
  ],
  imports: [
    RouterOutlet,
    CommonModule,
    SharedModule,
    DepartmentRouterModule,
]
})
export class DepartmentModule { }
