import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController, private router: Router, public theme: ThemeService,private storage: Storage) {
  }

  ngOnInit() {
    this.storage.get('mode').then((val) => {
      if(val == "day"){
          this.enableLight();
      }else if (val == "night"){
         this.enableDark();
      }
    });

    
  }

  // navigate to register page
  register() {
    this.router.navigate(['/register'])
  }

  // navigate to login page
  login() {
    this.router.navigate(['/login'])
  }

  enableDark() {

    this.theme.setTheme('night');

    this.storage.set('mode', 'night');
    
  }
  enableLight() {

    this.theme.setTheme('day');

    this.storage.set('mode', 'day');
  }

}
