import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ThemeService } from 'src/app/services/theme.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  darkmode;
  mode = "Enable";

  constructor(private menu: MenuController, public theme: ThemeService,private storage: Storage) { }

  ngOnInit() {
    this.storage.get('mode').then((val) => {
      if(val == "day"){
this.darkmode = false;
      }else if (val == "night"){
        this.darkmode = true;
      }
    });

    
  }

  status(value) {
    if (value.detail.checked == true) {
      this.mode = "Disable";
      this.enableDark();
    } else if (value.detail.checked == false) {
      this.mode = "Enable";
      this.enableLight();
    }
  }

  openMenu() {
    this.menu.toggle();

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
