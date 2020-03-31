import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import { Observable } from "rxjs";
import "rxjs/add/observable/of";
import "rxjs/add/operator/delay";

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
      department: "1",
      isActive: true,
      photoPath: "assets/images/image1.png"
    },
    {
      id: 2,
      name: "Mary",
      gender: "Female",
      contactPrefrence: "Phone",
      phoneNumber: 9875489756,
      dateOfBirth: new Date("10/25/1988"),
      department: "3",
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
      department: "4",
      isActive: true,
      photoPath: "assets/images/image1.png"
    }
  ];

  getEmployees(): Observable<Employee[]> {
    return Observable.of(this.listEmployees).delay(2000);
  }

  getEmployee(id: number): Employee {
    return this.listEmployees.find(e => e.id === id);
  }

  save(employee: Employee) {
    this.listEmployees.push(employee);
  }
}
