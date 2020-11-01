import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  
  registerForm: FormGroup;

  constructor(private modalCtrl: ModalController, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: [],
      email: [],
      gender: [],
      password: []
    });
  }

  ngOnInit() {}

  onCloseClick() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  onRegisterClick() {
    
  }

  submitForm() {
    console.log(this.registerForm.value);
  }
}
