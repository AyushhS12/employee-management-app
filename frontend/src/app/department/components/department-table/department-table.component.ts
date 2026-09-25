import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Employee from 'src/app/employee/models/Employee';
import Department from 'src/app/shared/models/Department';
import { DepartmentService } from '../../services/department.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
  styleUrls: ['./department-table.component.scss'],
})
export class DepartmentTableComponent implements AfterViewInit {

  employees!: Employee[];

  columns = ['id', 'name', 'username', 'email', 'department', 'role']

  dataSource = new MatTableDataSource<Employee>()

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  pageSize: number = 25
  pageSizeOptions: number[] = []
  constructor(private service: DepartmentService, private route: ActivatedRoute, private router: Router) {
    for (let i = 1; i < 5; i++) {
      this.pageSizeOptions.push(this.pageSize * i);
    }

    route.params.subscribe(param => {
      const name = param['name']
      if (!name) {
        router.navigate(['/department/all'])
      }
      this.service.getEmployeesByDepartmentName(name).subscribe(data => {
        this.employees = data.employees
        console.log(data.employees)
      })
    })

  }


  applyFilter(event: Event) {
    const input = event.target as HTMLInputElement
    this.dataSource.filter = input.value
  }

  // ngOnInit() {
  //   // this.department = history.state
  // }
  
  ngAfterViewInit() {
    this.employees = this.employees.sort((a, b) => {
      return a.id < b.id ? -1 : 1
    })
    this.dataSource.data = this.employees
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }
}
