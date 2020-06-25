import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterFinalComponent } from './register-final/register-final.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UserComponent } from './user.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, RegisterFinalComponent, UserComponent],
  exports: [
    UserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
