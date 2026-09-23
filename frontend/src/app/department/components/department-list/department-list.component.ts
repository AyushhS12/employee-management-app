import { Component } from '@angular/core';
import Department from 'src/app/shared/models/Department';
import { DepartmentService } from '../../services/department.service';
import { Observable } from 'rxjs';
import Employee from 'src/app/shared/models/Employee';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent {
  departments!: Observable<Department[]>
  constructor(private service: DepartmentService) {
    this.departments = service.getDepartments()
  }

  trackDepartment(_: number, dept: Department) {
    return dept.id
  }
  trackEmployee(_: number, emp: Employee) {
    return emp.id
  }

}
