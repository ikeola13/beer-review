import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreatePostPage } from '../create-post/create-post.page';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage';

import { MenuController } from '@ionic/angular';
import { ViewPostPage } from '../view-post/view-post.page';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reverse' })



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  // initialize variables
  rev = []

  reviews = false;

  constructor(public modalController: ModalController, public dataservice: DataService, private storage: Storage, private menu: MenuController) { }

  ngOnInit() {
  //get posts from storage and save in rev
  this.storage.get('arr').then((val) => {
    console.log(val);
    this.rev = val;
     console.log(this.rev.length)
    if (this.rev.length === 0) {
      this.reviews = true
    }
  });


  }

  ionViewWillEnter(){
  //get posts from storage and save in rev
  this.storage.get('arr').then((val) => {
    console.log(val);
    this.rev = val;

    if (this.rev.length === 0 ) {
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

}


// pipe to reverse array before displaying it in the html
export class ReversePipe implements PipeTransform {
  transform(value) {
    return value.slice().reverse();
  }
}