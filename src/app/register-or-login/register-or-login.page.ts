import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from './login/login.component';
import { user } from './register-or-login.constant';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-register-or-login',
  templateUrl: './register-or-login.page.html',
  styleUrls: ['./register-or-login.page.scss'],
})
export class RegisterOrLoginPage implements OnInit {

  user = user;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  
  async openModal(type: string) {
    const modal = await this.modalController.create({
      component: type === user.LOGIN ? LoginComponent : RegisterComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
