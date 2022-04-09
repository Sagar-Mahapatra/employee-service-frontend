import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeAllComponent } from './employee-all/employee-all.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginService } from './login.service';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './auth.interceptor';
import { FooterComponent } from './footer/footer.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './employee.service';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegisterComponent,
    EmployeeAllComponent,
    EmployeeEditComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    EmployeeDetailsComponent,
    ProfileComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [MatSnackBar, EmployeeService, LoginService, AuthGuard, [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]],
  bootstrap: [AppComponent]
})
export class AppModule { }
