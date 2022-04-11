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
  updatedName!: string;
  clicked: boolean = false;
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

  updateEmployee(id: number, name: string) {
    if (name != undefined) {
      this.service.updateEmployeeName(id, name).subscribe(data => {
        this.router.navigate(['employee-detail', id]);
      }, error => {
        console.log("error from fetchOneEmployee(id) of service" + error);
        this.router.navigate(['list'], error);
      }
      )
    }
  }
  editName() {
    this.clicked = true;
  }
}
