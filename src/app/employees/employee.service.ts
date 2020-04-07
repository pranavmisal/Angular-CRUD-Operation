import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import { throwError } from "rxjs";
import { of } from "rxjs";
import { delay } from "rxjs/operators";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs/Observable";

@Injectable()
export class EmployeeService {
  // private listEmployees: Employee[] = [
  //   {
  //     id: 1,
  //     name: "Mark",
  //     gender: "Male",
  //     contactPrefrence: "Email",
  //     email: "mark@pragimtech.com",
  //     dateOfBirth: new Date("10/25/1988"),
  //     department: "3",
  //     isActive: true,
  //     photoPath: "assets/images/mark.png",
  //   },
  //   {
  //     id: 2,
  //     name: "Mary",
  //     gender: "Female",
  //     contactPrefrence: "Phone",
  //     phoneNumber: 2345978640,
  //     dateOfBirth: new Date("11/20/1979"),
  //     department: "2",
  //     isActive: true,
  //     photoPath: "assets/images/mary.png",
  //   },
  //   {
  //     id: 3,
  //     name: "John",
  //     gender: "Male",
  //     contactPrefrence: "Phone",
  //     phoneNumber: 5432978640,
  //     dateOfBirth: new Date("3/25/1976"),
  //     department: "3",
  //     isActive: false,
  //     photoPath: "assets/images/john.png",
  //   },
  // ];

  baseUrl = "http://localhost:3000/employees";

  constructor(private httpClient: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.httpClient
      .get<Employee[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  getEmployee(id: number): Observable<Employee> {
    return this.httpClient
      .get<Employee>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient
      .post<Employee>(this.baseUrl, employee, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      })
      .pipe(catchError(this.handleError));
  }

  updateEmployee(employee: Employee): Observable<void> {
    return this.httpClient
      .put<void>(`${this.baseUrl}/${employee.id}`, employee, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      })
      .pipe(catchError(this.handleError));
  }

  deleteEmployee(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error("Client Side Error :", errorResponse.error.message);
    } else {
      console.error("Server Side Error :", errorResponse);
    }
    return throwError(
      "There is a problem with the service. We are notified & working on it. Please try again later."
    );
  }
}
