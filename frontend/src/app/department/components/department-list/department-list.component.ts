import { Component, QueryList, ViewChildren } from '@angular/core';
import Department from 'src/app/shared/models/Department';
import { DepartmentService } from '../../services/department.service';
import Employee from 'src/app/shared/models/Employee';
import { DepartmentTableComponent } from '../department-table/department-table.component';
import { from } from 'rxjs';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent {
  departments!: Department[]

  constructor(private service: DepartmentService) {
    this.service.getDepartments().subscribe(data => {
      this.departments = data
    })
  }

  @ViewChildren(DepartmentTableComponent) tables!: QueryList<DepartmentTableComponent>

  applyFilter(event: Event) {
    const input = event.target as HTMLInputElement
    this.tables.forEach(t => t.applyFilter(input.value))
  }

  trackDepartment(_: number, dept: Department) {
    return dept.id
  }
  trackEmployee(_: number, emp: Employee) {
    return emp.id
  }

}
