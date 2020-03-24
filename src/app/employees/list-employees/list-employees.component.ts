import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  //selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[]=[
      {
        id: 1,
        name: "Mark",
        gender: "Male",
        contactPrefrence: "Email",
        email: "mark@abc.com",
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
  constructor() { }

  ngOnInit(): void {
  }

}
