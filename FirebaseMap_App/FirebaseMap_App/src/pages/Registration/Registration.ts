import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LogInPage } from '../LogIn/LogIn';


/*
  Generated class for the Registration page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-Registration',
    templateUrl: 'Registration.html'
})
export class RegistrationPage {

  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  RegistrationForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {

    this.RegistrationForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email: ['', Validators.compose([Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(8), Validators.required])],
    });

  }

  login() {
    console.log("clicked on button");
    this.navCtrl.push(LogInPage);

  }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegistrationPage');
    }

}
