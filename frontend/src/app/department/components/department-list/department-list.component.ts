import { Component, ViewChild } from '@angular/core';
import Department from 'src/app/shared/models/Department';
import { DepartmentService } from '../../services/department.service';
import Employee from 'src/app/shared/models/Employee';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent {
  
  departments!: Department[]

  constructor(private service: DepartmentService, private dialog: MatDialog, private snackbar: MatSnackBar) {
    this.service.getDepartments().subscribe(data => {
      this.departments = data
      this.dataSource.data = data
    })
  }
  handleDepartmentAdded(data: { name: string, id: number }) {
    this.dataSource.data = [
      ...this.dataSource.data,
      { employees: [], id: data.id, name: data.name }
    ]
  }

  dataSource = new MatTableDataSource<Department>()

  departmentColumns = ['id', 'name', 'count', 'employees', 'actions']

  @ViewChild(MatSort)
  set matSort(sort: MatSort) {
    this.dataSource.sort = sort
  }

  // applyFilter(event: Event) {
  //   const input = event.target as HTMLInputElement
  //   this.tables.forEach(t => t.applyFilter(input.value))
  // }

  trackDepartment(_: number, dept: Department) {
    return dept.id
  }
  trackEmployee(_: number, emp: Employee) {
    return emp.id
  }

  handleDelete(id: number) {
    const dialog = this.dialog.open(ConfirmDialogComponent, { data: { title: "Are you sure ?", content: `Department with ID ${id} will be deleted` } })
    dialog.afterClosed().subscribe((data: boolean) => {
      if (data) {
        console.log(id)
        this.service.deleteDepartment(id).subscribe(data => {
          if (data.success) {
            this.dataSource.data = this.dataSource.data.filter(d => d.id != id)
            this.snackbar.open(data.message, "", { duration: 3000 });
          }
        })
      }
    })
  }
}
