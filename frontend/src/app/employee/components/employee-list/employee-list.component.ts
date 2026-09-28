import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import Employee from '../../models/Employee';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  employees!: Employee[]
  constructor(
    private service: EmployeeService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {
    service.getEmployees().subscribe((data) => {
      this.employees = data.sort((a, b) => {
        return a.id < b.id ? -1 : 1
      })
    })
  }

  handleUpdate(emp: Employee) {
    this.service.update(emp).subscribe((data) => {
      if (data.success) {
        this.snackbar.open("Updated the employee", "", { duration: 2000 })
      } else {
        console.log(data)
      }
    })
  }

  handleDelete(id: number) {
    const dialog = this.openDialog("Are you sure ?", `Employee with id: ${id} will be deleted`)
    dialog.afterClosed().subscribe((data: boolean) => {
      if (data) {
        this.service.deleteById(id).subscribe((data) => {
          if (data.success) {
            this.snackbar.open("Deleted the employee with id: " + id, "", { duration: 2000 })
            this.employees = this.employees.filter(e => e.id != id)
          } else {
            console.log(data)
          }
        })
      }
    })
  }


  openDialog(title: string, content: string) {
    return this.dialog.open(
      ConfirmDialogComponent,
      {
        data: {
          title,
          content
        }
      }
    )
  }
}
