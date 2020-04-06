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
      photoPath: "assets/images/image1.png",
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
      photoPath: "assets/images/image2.png",
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
      photoPath: "assets/images/image1.png",
    },
  ];

  getEmployees(): Observable<Employee[]> {
    return Observable.of(this.listEmployees).delay(2000);
  }

  getEmployee(id: number): Employee {
    return this.listEmployees.find((e) => e.id === id);
  }

  save(employee: Employee) {
    if (employee.id === null) {
      const maxId = this.listEmployees.reduce(function (e1, e2) {
        return e1.id > e2.id ? e1 : e2;
      }).id;
      employee.id = maxId + 1;

      this.listEmployees.push(employee);
    } else {
      const foundIndex = this.listEmployees.findIndex(
        (e) => e.id === employee.id
      );
      this.listEmployees[foundIndex] = employee;
    }
  }

  deleteEmployee(id: number) {
    const i = this.listEmployees.findIndex((e) => e.id === id);
    if (i !== -1) {
      this.listEmployees.splice(i, 1);
    }
  }
}
