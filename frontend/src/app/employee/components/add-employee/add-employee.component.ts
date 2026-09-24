import { Component, ElementRef, EventEmitter, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { departments, roles } from 'src/app/shared/models/Collections';
import Employee from 'src/app/shared/models/Employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {

  constructor(private dialog: MatDialog) { }

  // @ViewChild("confirmDialog") child!: ConfirmDialogComponent

  // constructor(){
  //   setTimeout(() => {
  //     // this.child.color = "red"
  //   },20)
  // }
  form!: NgForm
  departments = departments;
  roles = roles;

  @Output() employeeCreated = new EventEmitter<Employee>()
  emp: Employee = new Employee();

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

  handleConfirm() {
    const dialog = this.openDialog("Are you sure ?", "")
    dialog.afterClosed().subscribe((data: boolean) => {
      const emp = {
        ...this.form.value,
        id: this.emp.id
      }
      this.employeeCreated.emit(emp);
      this.form.resetForm({ "department": '', "role": '' })
    })
  }

  handleSubmit(form: NgForm) {
    this.form = form
  }
}
