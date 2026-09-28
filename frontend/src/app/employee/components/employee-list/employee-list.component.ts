import { Component, QueryList, ViewChildren } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import Employee from '../../models/Employee';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { EmployeeCardComponent } from 'src/app/shared/angular-material/components/employee-card/employee-card.component';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  employees!: Employee[]

  @ViewChildren(EmployeeCardComponent) cards!: QueryList<EmployeeCardComponent>;

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
    service.updateEmployee$.subscribe(emp => {
      if (emp) this.handleUpdate(emp)
    })
  }

  handleUpdate(emp: Employee) {
    this.service.update(emp).pipe(catchError(error => {
      this.snackbar.open("Not Authorized", "Close", { duration: 2000 })
      return throwError(() => error);
    })).subscribe((data) => {
      if (data.success) {
        this.snackbar.open("Employee Updated", "", { duration: 2000 })
        this.service.sendEmployeeUpdate(emp)
      } else {
        console.log(data)
      }
    })
  }

  handleDelete(id: number) {
    const dialog = this.openDialog("Are you sure ?", `Employee with id: ${id} will be deleted`)
    dialog.afterClosed().subscribe((data: { action: boolean, remark: string }) => {
      if (data) {
        if (this.cards) {
          const card = this.cards.find((c) => c.employee.id === id)
          if (card) {
            card.setRemark(data.remark)
          }
        }
        if (data.action) {
          this.service.deleteById(id).subscribe((data) => {
            if (data.success) {
              this.snackbar.open("Deleted the employee with id: " + id, "", { duration: 2000 })
              this.employees = this.employees.filter(e => e.id != id)
            } else {
              this.snackbar.open("Operation Failed!", "Ok", { duration: 3000 })
              console.log(data)
            }
          })
        }
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
        },
        width: "500px"
      }
    )
  }
}
