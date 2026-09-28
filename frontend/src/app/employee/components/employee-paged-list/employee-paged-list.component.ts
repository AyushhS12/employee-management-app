import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import Employee from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service';
// import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-paged-list',
  templateUrl: './employee-paged-list.component.html',
  styleUrls: ['./employee-paged-list.component.scss'],
})
export class EmployeePagedListComponent implements OnInit {

  currentEmployees: Employee[] = []

  pageSize = 10
  pageIndex = 0
  length = 0
  pageSizeOptions = [10, 20, 30, 40, 50, 100]

  // queryParams!: { pageIndex: number, pageSize: number }

  constructor(private service: EmployeeService, private route: ActivatedRoute) {
    // this.route.queryParams.subscribe(params => {
    //   this.queryParams = {
    //     pageIndex: params['pageIndex'],
    //     pageSize: params['pageSize']
    //   }
    //   console.log(this.queryParams)
    // })
    this.service.getPagedList(this.pageSize, this.pageIndex).subscribe(data => {
      this.currentEmployees = data.employees
      this.length = data.count
      this.sort()
    })
  }

  ngOnInit(): void {
    // this.pageSize = this.queryParams.pageSize
    // this.pageIndex = this.queryParams.pageIndex
  }

  onPageChange(event: PageEvent) {
    if (!(event.pageSize < this.currentEmployees.length)) {
      this.pageSize = event.pageSize
      this.pageIndex = event.pageIndex
      this.service.getPagedList(event.pageSize, event.pageIndex).subscribe(data => {
        this.currentEmployees = data.employees; this.length = data.count
        this.sort()
      })
      console.log(!(event.pageSize < this.currentEmployees.length))
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    console.log(this.currentEmployees)
  }

  sort() {
    this.currentEmployees.sort((a, b) => a.id < b.id ? -1 : 1)
  }
}
