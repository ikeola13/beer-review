import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {

  // initialize empty array to store posts
  post_list = [];

  constructor(public modalController: ModalController, public dataservice: DataService, private storage: Storage) { }

  ngOnInit() {
    // on page load, get posts from storage and save in array
    this.storage.get('arr').then((val) => {
      this.post_list = val;
    });
  }

  dismiss() {
    // dismiss modal
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  post(name, brewer, date, price, serving, flavor,rating, des) {

    // if posts array is empty, set it to an empty array
    if (this.post_list == null) {
      this.post_list = []
    }

    // add new post to an array of posts
    this.post_list.push({
      name: name.value,
      brewer: brewer.value,
      date: date.value,
      price: price.value,
      serving: serving.value,
      flavor: flavor.value,
      rating: rating.value,
      des: des.value
    }) 

    this.storage.set('arr', this.post_list);

    this.storage.get('arr').then((items) => {
      
    });

    this.dismiss();
  }



}
