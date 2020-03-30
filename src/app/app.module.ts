import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListEmployeesComponent } from "./employees/list-employees/list-employees.component";
import { CreateEmployeeComponent } from "./employees/create-employee.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SelectRequiredValidatorDirective } from "./shared/select-required-validator.directive";
import { ConfirmEqualValidatorDirective } from "./shared/confirm-equal-validator.directive";
import { EmployeeService } from "./employees/employee.service";
import { DisplayEmployeeComponent } from "./employees/display-employee.component";
import { CreateEmployeeCanDeactivateGuardService } from "./employees/create-employee-can-deactivate-guard.service";
import { EmployeeDetailsComponent } from "./employees/employee-details.component";

const appRoutes: Routes = [
  { path: "list", component: ListEmployeesComponent },
  {
    path: "create",
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuardService]
  },
  { path: "employees/:id", component: EmployeeDetailsComponent },
  { path: "", redirectTo: "/list", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
