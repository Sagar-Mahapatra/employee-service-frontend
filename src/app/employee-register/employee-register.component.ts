import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {

  //Form Backing Object
  employee: Employee = new Employee(0, '', '', '', '', '', '', '', '', '');
  message!: string;
  //DI
  constructor(private snack: MatSnackBar, private service: EmployeeService) { }

  ngOnInit(): void {
  }

  createEmployee() {
    this.service.createEmployee(this.employee)
      .subscribe(data => {
        this.message = data;
        this.employee = new Employee(0, '', '', '', '', '', '', '', '', '');
        this.snack.open(this.message, "OK");
      }, error => {
        console.log(error);
        this.message = 'Unable to save! Please Contact Admin';
        this.snack.open(this.message, "Cancel");
      });
  }

  updateEmpName(data: any) {
    this.employee.empName = data.target.value;
  }
}
