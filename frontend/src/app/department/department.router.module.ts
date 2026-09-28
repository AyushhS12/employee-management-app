import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DepartmentRouterComponent } from "./department.router.component";
import { DepartmentListComponent } from "./components/department-list/department-list.component";
import { DepartmentTableComponent } from "./components/department-table/department-table.component";
import { AddDepartmentComponent } from "./components/add-department/add-department.component";

const routes: Routes = [
    {
        path: '',
        component: DepartmentRouterComponent,
        children: [
            {
                path: 'all',
                component: DepartmentListComponent
            },
            {
                path: 'add',
                component: AddDepartmentComponent
            },
            {
                path: ':name',
                component: DepartmentTableComponent
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DepartmentRouterModule {

}