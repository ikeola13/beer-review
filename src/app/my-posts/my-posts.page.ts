import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreatePostPage } from '../create-post/create-post.page';
import { DataService } from '../data.service';
import { Storage } from '@ionic/storage';

import { MenuController } from '@ionic/angular';
import { ViewPostPage } from '../view-post/view-post.page';
import { EditPostPage } from '../edit-post/edit-post.page';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.page.html',
  styleUrls: ['./my-posts.page.scss'],
})
export class MyPostsPage implements OnInit {

  // initialize variables
  rev = []

  reviews = false;

  constructor(public modalController: ModalController, public dataservice: DataService, private storage: Storage, private menu: MenuController) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    console.log("here")
    //get posts from storage and save in rev
    this.storage.get('arr').then((val) => {
      console.log(val);
      this.rev = val;

      if (this.rev !== []) {
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
  async editModal(id) {
    const modal = await this.modalController.create({
      component: EditPostPage,
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

  async deleteModal(id) {
    console.log(id, "delete");

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
    
      let newarr = this.rev.splice(id, 1);
    console.log(newarr);

    console.log(this.rev);

    this.storage.set('arr', this.rev);

      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })}
 

}


