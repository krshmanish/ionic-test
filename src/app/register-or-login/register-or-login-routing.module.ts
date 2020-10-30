import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterOrLoginPage } from './register-or-login.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterOrLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterOrLoginPageRoutingModule {}
