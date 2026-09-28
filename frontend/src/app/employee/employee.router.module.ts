import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeRouterComponent } from "./employee.router.component";
import { AddEmployeeComponent } from "./components/add-employee/add-employee.component";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { EmployeePagedListComponent } from "./components/employee-paged-list/employee-paged-list.component";

const routes: Routes = [
    {
        path: '',
        component: EmployeeRouterComponent,
        children: [
            {
                path: 'add',
                component: AddEmployeeComponent
            },
            {
                path: 'all',
                component: EmployeeListComponent
            },
            {
                path: 'paged-list',
                component: EmployeePagedListComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class EmployeeRouterModule { }