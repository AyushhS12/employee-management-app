import { Component } from '@angular/core';
import Employee from '../shared/models/Employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // emps: Employee[] = [
  //   {
  //     id: 1,
  //     name: "Dummy Data",
  //     username: "aaa",
  //     email: "a@a",
  //     password: "",
  //     department: "HR",
  //     role: "",
  //   },
  //   {
  //     id: 2,
  //     name: "Dummy Data 2",
  //     username: "bbb",
  //     email: "a@b",
  //     password: "",
  //     department: "IT",
  //     role: "",
  //   },
  //   {
  //     id: 3,
  //     name: "Dummy Data 3",
  //     username: "ccc",
  //     email: "a@c",
  //     password: "",
  //     department: "Testing",
  //     role: "",
  //   },
  //   {
  //     id: 4,
  //     name: "Dummy Data 4",
  //     username: "ddd",
  //     email: "a@d",
  //     password: "",
  //     department: "Devops",
  //     role: "",
  //   },
  //   {
  //     id: 5,
  //     name: "Dummy Data 5",
  //     username: "eee",
  //     email: "a@e",
  //     password: "",
  //     department: "Sales",
  //     role: "",
  //   },
  //   {
  //     id: 6,
  //     name: "Dummy Data 6",
  //     username: "fff",
  //     email: "a@f",
  //     password: "",
  //     department: "Sales",
  //     role: "",
  //   },
  // ]

  // onEmployeeCreated(emp: Employee) {
  //   this.emps.push(emp)
  // }

  // trackByIndex(_: number, emp: Employee) {
  //   return emp.id
  // }

  // handleDelete(id: number) {
  //   this.emps = this.emps.filter(e => e.id != id)
  // }
}
