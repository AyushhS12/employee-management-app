import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import Employee from 'src/app/employee/models/Employee';
import { EmployeeService } from 'src/app/employee/services/employee.service';
import { departments, roles } from 'src/app/shared/models/Collections';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {
  @Input() employee!: Employee
  @Output() deletedId = new EventEmitter<number>()
  @ViewChild("editForm") form!: NgForm

  constructor(private service: EmployeeService) {
    service.employeeUpdated$.subscribe(emp => {
      if (this.employee && emp && this.employee.id === emp.id) {
        this.employee = { ...emp }
      }
    })
  }

  remark = "Default remark (For Testing)"

  setRemark(value: string) {
    this.remark = value
  }

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
      if (this.form.dirty) {
        const emp = {
          ...this.employee,
          ...this.form.value
        }
        this.service.setUpdateEmployee(emp)
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
