import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  constructor() { }

  ngOnInit() {
  }
  registrer(form: NgForm){
    console.log(form.value);
    console.log(form.value);
    console.log(form.invalid);
    console.log(form.invalid);



  }
  
   

  }


