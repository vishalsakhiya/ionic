import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrationPage } from '../Registration/Registration';
import { HomePage } from '../home/home';

/*
  Generated class for the LogIn page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-LogIn',
    templateUrl: 'LogIn.html'
})
export class LogInPage {

  email: FormControl;
  password: FormControl;
  LoginForm: FormGroup;

  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {

    this.LoginForm = formBuilder.group({

      email: ['', Validators.compose([Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(8), Validators.required])],
    });
  }

  register() {
    console.log("clicked on button");
    this.navCtrl.push(RegistrationPage);

  }
  //validate(): boolean {
  //  if (this.LoginForm.valid) {
  //    return true;
  //  }
  //}

  login() {

    this.submitAttempt = true;

    if (!this.LoginForm.valid) {

    }
    else {
      console.log("success!")
      console.log(this.LoginForm.value);
      console.log(this.LoginForm.value);
    }
  }

  submit(): void {
    this.submitAttempt = true;

    if (!this.LoginForm.valid) {

    }
    else {
      console.log("success!")
      console.log(this.LoginForm.value);
      console.log(this.LoginForm.value);
      this.navCtrl.setRoot(HomePage);
    }
  }



    ionViewDidLoad() {
        console.log('ionViewDidLoad LogInPage');
    }

}
