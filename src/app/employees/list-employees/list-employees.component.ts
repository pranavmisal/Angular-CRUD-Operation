import { Component, OnInit } from "@angular/core";
import { Employee } from "src/app/models/employee.model";
import { EmployeeService } from "src/app/employees/employee.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./list-employees.component.html",
  styleUrls: ["./list-employees.component.css"]
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  searchTerm: string;

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

  changeEmployeeName() {
    // this.employees[0].name = "Jordan";
    const newEmployeeArray: Employee[] = Object.assign([], this.employees);
    newEmployeeArray[0].name = "Jordan";
    this.employees = newEmployeeArray;
  }

  onClick(employeeId: number) {
    this._router.navigate(["/employees", employeeId]);
  }
}
