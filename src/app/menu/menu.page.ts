import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  navigate : any;
  constructor() { }

  ngOnInit() {
    this.sideMenu();
  }

  sideMenu(){
    this.navigate =
    [
      {
        title : "Dashboard",
        url   : "/menu/dashboard"
      },
      {
        title : "Settings",
        url   : "/menu/settings"
      },
    ]
  }

}
