import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreatePostPage } from '../../Modals/create-post/create-post.page';
import { DataService } from '../../services/data.service';
import { Storage } from '@ionic/storage';

import { MenuController } from '@ionic/angular';
import { ViewPostPage } from '../../Modals/view-post/view-post.page';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  // initialize variables
  allReviews = []

  reviews = false;

  constructor(public modalController: ModalController, public dataservice: DataService, private storage: Storage, private menu: MenuController) { }

  ngOnInit() {
  //get posts from storage and save in rev
  this.storage.get('arr').then((value) => {
   
    this.allReviews = value;
    if (this.allReviews !== null) {
      this.reviews = true
    } 
  });


  }

  ionViewWillEnter(){
  //get posts from storage and save in rev
  this.storage.get('arr').then((val) => {
    
    this.allReviews = val;

    if (this.allReviews !== null ) {
      this.reviews = true
    }
  });
  }

  //  opens modal to create post
  async presentModal() {
    const modal = await this.modalController.create({
      component: CreatePostPage
    });
    modal.onDidDismiss()
      .then(() => {
        this.ngOnInit()
      });
    return await modal.present();
  }

  // pass id of clicked post to view modal
  async viewModal(id) {
    const modal = await this.modalController.create({
      component: ViewPostPage,
      componentProps: {
        'id': id,
      }
    });
    modal.onDidDismiss()
      .then(() => {
        this.ngOnInit()
      });
    return await modal.present();
  }
 
  openMenu(){
    this.menu.toggle();
  }

}