import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.page.html',
  styleUrls: ['./registrer.page.scss'],
  standalone: false,
})
export class RegistrerPage implements OnInit {
 email: String = '';
 nombre: String = '';
 password: String = '';
 passwordconfirm: String = '';
 numero: String = '';

  constructor(
    private navcontroller: NavController,) { }

  ngOnInit() {
  }
  register(form: NgForm) {
    if(form.invalid) {
      this.navcontroller.navigateBack('/home');
   }
  
   

  }


}