import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { DepartmentRouterComponent } from './department.router.component';
import { RouterOutlet } from '@angular/router';
import { DepartmentRouterModule } from './department.router.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentRouterComponent
  ],
  imports: [
    RouterOutlet,
    CommonModule,
    SharedModule,
    DepartmentRouterModule,
]
})
export class DepartmentModule { }
