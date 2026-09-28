import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import Employee from 'src/app/employee/models/Employee';
import { departments, roles } from 'src/app/shared/models/Collections';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {
  @Input() employee!: Employee
  @Output() updateEmployee = new EventEmitter<Employee>()
  @Output() deletedId = new EventEmitter<number>()
  @ViewChild("editForm") form!: NgForm

  roles = roles
  departments = departments

  editMode = false

  toggleEdit = () => {
    this.editMode = !this.editMode
  }

  turnOnEditMode() {
    this.editMode = true
  }

  finishEditMode() {
    this.editMode = false
    if (this.form?.valid && this.form.value) {
      this.employee = {
        ...this.employee,
        ...this.form.value
      }
      if (this.form.dirty) {
        this.updateEmployee.emit(this.employee)
      }
    }
  }

  onDelete() {
    this.deletedId.emit(this.employee.id)
  }

  // handleEdit() {
  //   this.employee = form.value
  // }
}
