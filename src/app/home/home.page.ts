import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  email: String = 'ee';
  nombre : String = 'ee';
  contrasena: String = 'ee';
  constructor(
    private navController: NavController,
    private toastController: ToastController,
  ) {}
ngOnInit(){

}
login(){
  if(this.email == 'fernando.lezama@utcv.edu.mx' && this.contrasena == 'dsm5b'){
    this.navController.navigateRoot('/menu');
  } else {
    this.presentToast('bottom'); // Invoca la función con un argumento
  }
}

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Las credenciales estan incorrectas',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}

