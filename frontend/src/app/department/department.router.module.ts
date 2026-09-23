import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DepartmentRouterComponent } from "./department.router.component";
import { DepartmentListComponent } from "./components/department-list/department-list.component";

const routes: Routes = [
    {
        path: '',
        component: DepartmentRouterComponent,
        children: [
            {
                path: 'all',
                component: DepartmentListComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DepartmentRouterModule {

}