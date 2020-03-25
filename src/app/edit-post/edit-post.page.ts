import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage';
import { NavParams } from '@ionic/angular';



@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.page.html',
  styleUrls: ['./edit-post.page.scss'],
})

export class EditPostPage implements OnInit {

  @Input() id: string;

  main_post_id ;
  temp_array = [];
  
  name;
  brewer;
  price;
  serving;
  flavor;
  rating;
  des;
  posted;

  
  // initialize empty array to store posts
  post_list = [];

  constructor(public modalController: ModalController, public navParams: NavParams, public dataservice: DataService, private storage: Storage) { }

  ngOnInit() {
    console.log(this.navParams.get('id'));
    this.main_post_id = this.navParams.get('id');

    // on page load, get posts from storage and save in array
    this.storage.get('arr').then((val) => {
      console.log(val);
      this.post_list = val;
      
      this.temp_array = this.post_list[this.main_post_id];
      console.log(this.temp_array);
    });

    
  }

  dismiss() {
    // dismiss modal
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  post(name, brewer, date, price, serving, flavor,rating, des) {
    let updatedData = {
      name: name.value,
      brewer: brewer.value,
      date: date.value,
      price: price.value,
      serving: serving.value,
      flavor: flavor.value,
      rating: rating.value,
      des: des.value
    }

    this.storage.get('arr').then(valueStr => {
      console.log(valueStr[this.main_post_id]);
  
       // Modify just that property
       valueStr[this.main_post_id] = updatedData;
  
      //Save the entire data again
       this.storage.set('arr', valueStr);

       this.ngOnInit();
  });
    this.dismiss();
  }
}
