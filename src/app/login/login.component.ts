import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { TokenStorageService } from '../token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    username: "",
    password: ""
  }

  flag: boolean = false;


  myImage: string = "assets/Image/image.jpg";
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private snack: MatSnackBar, private ls: LoginService, private router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      //this.roles = this.tokenStorage.getUser().roles;
      this.gotoIndex();
    }
  }

  onSubmit(): void {
    this.ls.generateToken(this.credentials).subscribe(
      data => {
        if (data != null || data != "") {
          this.gotoIndex();
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        alert('Login Failed + ' + this.errorMessage);
      }
    );
  }

  doLogin(): void {
    if (this.credentials.username == '' || this.credentials.password == '') {
      console.log("Fields can not be empty");
      this.snack.open("Fields can not be empty", "Cancel");
    } else {
      this.flag = true;
      this.ls.login(this.credentials).subscribe(
        data => {
          this.flag = false;
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          //this.roles = this.tokenStorage.getUser().roles;
          //alert('Logged In as ' + this.roles);
          this.snack.open("Login Successful", "OK");
          this.gotoIndex();
        },
        err => {
          this.flag = false;
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
          //alert('Login Failed + ' + this.errorMessage);
          this.snack.open("Invalid Credentials", "Cancel");
        }

      );
    }

  }
  gotoIndex() {
    this.router.navigate(['home']);
  }

  btnClick() {
    console.log("btnClick() executed");
    this.snack.open("Reset Done", "Cancel");
  }

  keyUpEvent() {
    if (!this.credentials.username.endsWith('@gmail.com')) {
      this.snack.open("Email must Conatain '@gmail.com'", "OK");
    } else { this.snack.dismiss; }
  }
}
