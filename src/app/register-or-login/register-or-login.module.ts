import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterOrLoginPageRoutingModule } from './register-or-login-routing.module';

import { RegisterOrLoginPage } from './register-or-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterOrLoginPageRoutingModule
  ],
  declarations: [RegisterOrLoginPage]
})
export class RegisterOrLoginPageModule {}
