import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RegisterOrLoginPageRoutingModule } from './register-or-login-routing.module';
import { RegisterOrLoginPage } from './register-or-login.page';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterOrLoginPageRoutingModule
  ],
  declarations: [RegisterOrLoginPage, RegisterComponent, LoginComponent]
})
export class RegisterOrLoginPageModule {}
