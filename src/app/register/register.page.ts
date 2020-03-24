import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  //method to handle registration
  register(username, email, password) {
    console.log(username.value, email.value, password.value)

    if (username.value.length <= 0 || email.value.length <= 0 || password.value.length <= 0) {
      this.sweetalert("Error!", "Kindly fill the form correctly", "error");
    } else if ((/(.+)@(.+){2,}\.(.+){2,}/.test(email.value)) == false) {
      this.sweetalert("Error!", "wrong email format", "error");
    }
    else {
      this.successSweetalert("Success!", "Account Created Successfully", "success");
    }}

  async presentAlert(msg, sub) {
    const alert = await this.alertController.create({
      message: msg,
      subHeader: sub,
      buttons: ['Ok']
    });
    await alert.present();
  }

  // sweetalert method to throw alert boxes
  sweetalert(title, text, icon) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: 'Ok'
    })
  }
  
// sweetalert method to throw alert boxes
  successSweetalert(title, text, icon) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: 'Ok'
    }).then(() => {
      this.router.navigate(['/login'])
    })
  }

}




