import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  selectedPath = '';

  menulist: any;
  constructor(private router: Router,private storage: Storage) { 
    this.router.events.subscribe((event:RouterEvent) =>{
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
    this.sideMenu();
  }

  sideMenu(){
    this.menulist =
    [
      {
        title : "Dashboard",
        url   : "/menu/dashboard"
      },
      {
        title : "User Profile",
        url   : "/menu/profile"
      },
      {
        title : "My posts",
        url   : "/menu/my-posts"
      },
      {
        title : "Settings",
        url   : "/menu/settings"
      },
      {
        title : "Sign Out",
        url   : "/login"
      },
    ]
  }

  logout(url){
    this.router.navigate([url])
  }


}
