import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Department } from "../models/department.model";
import { Employee } from "../models/employee.model";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPrefrence: null,
    phoneNumber: null,
    email: "",
    dateOfBirth: null,
    department: "select",
    isActive: null,
    photoPath: null
  };
  departments: Department[] = [
    { id: 1, name: "Help Desk" },
    { id: 2, name: "HR" },
    { id: 3, name: "IT" },
    { id: 4, name: "Payroll" },
    { id: 4, name: "Admin" }
  ];
  constructor() {
    this.datePickerConfig = Object.assign(
      {},
      {
        containerClass: "theme-dark-blue",
        dateInputFormat: "DD/MM/YYYY"
      }
    );
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit(): void {}

  saveEmployee(newEmployee: Employee): void {
    console.log(newEmployee);
  }
}
