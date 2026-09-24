import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { DepartmentRouterComponent } from './department.router.component';
import { RouterOutlet } from '@angular/router';
import { DepartmentRouterModule } from './department.router.module';
import { SharedModule } from '../shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { DepartmentTableComponent } from './components/department-table/department-table.component';



@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentRouterComponent,
    DepartmentTableComponent
  ],
  imports: [
    RouterOutlet,
    CommonModule,
    SharedModule,
    MatInputModule,
    DepartmentRouterModule,
]
})
export class DepartmentModule { }
