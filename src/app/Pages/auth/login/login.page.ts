import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  // method to handle login
  login(username, password) {
    

    if (username.value.length <= 0 || password.value.length <= 0) {
      this.sweetalert("Error!", "Kindly fill the form correctly", "error");
    } else {
      this.successSweetalert("Success!", "Login Successful", "success");
    }

  }

  async presentAlert(msg, sub) {
    const alert = await this.alertController.create({
      message: msg,
      subHeader: sub,
      buttons: ['Ok']
    });
    await alert.present();
  }

  // sweet alert method to display message
  sweetalert(title, text, icon) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: 'Ok'
    })
  }

  // sweet alert method to display message
  successSweetalert(title, text, icon) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: 'Ok'
    }).then(() => {
      this.router.navigate(['/menu/dashboard'])
    })
  }
}
