import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";

@Injectable()
export class EmployeeService {
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: "Mark",
      gender: "Male",
      contactPrefrence: "Email",
      email: "mark@gmail.com",
      dateOfBirth: new Date("10/25/1988"),
      department: "IT",
      isActive: true,
      photoPath: "assets/images/image2.png"
    },
    {
      id: 2,
      name: "Mary",
      gender: "Female",
      contactPrefrence: "Phone",
      phoneNumber: 9875489756,
      dateOfBirth: new Date("10/25/1988"),
      department: "HR",
      isActive: true,
      photoPath: "assets/images/image2.png"
    },
    {
      id: 3,
      name: "John",
      gender: "Male",
      contactPrefrence: "Phone",
      phoneNumber: 9865489756,
      dateOfBirth: new Date("12/28/1990"),
      department: "HR",
      isActive: true,
      photoPath: "assets/images/image2.png"
    }
  ];

  getEmployees(): Employee[] {
    return this.listEmployees;
  }
}
