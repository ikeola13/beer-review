import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController, private router: Router) {
  }

  // navigate to register page
  register() {
    this.router.navigate(['/register'])
  }

  // navigate to login page
  login() {
    this.router.navigate(['/login'])
  }

}
