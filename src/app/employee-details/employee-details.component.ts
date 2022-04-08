import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee = new Employee(0, '', '', '', '', '', '', '', '', '');

  constructor(private service: EmployeeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log('ngOnInit() in EmployeeDetailsComponent exected');
    //read parameter from routing
    const id = this.activatedRoute.snapshot.params['id'];
    this.service.fetchOneEmployee(id).subscribe(data => {
      console.log(data);
      this.employee = data;
    }, error => {
      console.log("error from fetchOneEmployee(id) of service" + error);
      this.router.navigate(['list'], error);
    })
  }

}
