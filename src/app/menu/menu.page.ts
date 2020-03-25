import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  navigate : any;
  constructor(private router: Router) { }

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

  gotoPage(url){
    this.router.navigate([url])
  }

}
