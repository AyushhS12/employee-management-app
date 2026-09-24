import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import Employee from 'src/app/employee/models/Employee';

@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
  styleUrls: ['./department-table.component.scss'],
})
export class DepartmentTableComponent implements AfterViewInit, OnInit {

  @Input() employees!: Employee[]

  dataSource = new MatTableDataSource<Employee>()

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  applyFilter(value: string) {
    this.dataSource.filter = value
  }

  ngOnInit() {
    this.employees = this.employees.sort((a, b) => {
      return a.id < b.id ? -1 : 1
    })
    this.dataSource.data = this.employees
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

}
