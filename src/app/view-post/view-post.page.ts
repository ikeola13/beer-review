import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.page.html',
  styleUrls: ['./view-post.page.scss'],
})
export class ViewPostPage implements OnInit {

  name;
  brewer;
  price;
  serving;
  flavor;
  rating;
  des;
  posted;

  main_post_id;
  post_id;


  @Input() id: string;

  constructor(public modalController: ModalController, public navParams: NavParams, private storage: Storage) { }

  ngOnInit() {
    console.log(this.navParams.get('id'));
    this.main_post_id = this.navParams.get('id');

    this.storage.get('arr').then((val) => {
      console.log(val.length, val[this.main_post_id].name);

      this.post_id = val.length - this.main_post_id - 1;
      console.log(this.post_id);


      this.name = val[this.post_id].name;
      this.brewer = val[this.post_id].brewer;
      this.price = val[this.post_id].price;
      this.serving = val[this.post_id].serving;
      this.flavor = val[this.post_id].flavor;
      this.rating = val[this.post_id].rating;
      this.des = val[this.post_id].des;
      this.posted = val[this.post_id].date;

    });

  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
