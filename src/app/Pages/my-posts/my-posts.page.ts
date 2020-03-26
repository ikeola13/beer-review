import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreatePostPage } from '../../Modals/create-post/create-post.page';
import { DataService } from '../../services/data.service';
import { Storage } from '@ionic/storage';

import { MenuController } from '@ionic/angular';
import { ViewPostPage } from '../../Modals/view-post/view-post.page';
import { EditPostPage } from '../../Modals/edit-post/edit-post.page';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.page.html',
  styleUrls: ['./my-posts.page.scss'],
})
export class MyPostsPage implements OnInit {

  // initialize variables
  allReviews = []

  reviews = false;

  constructor(public modalController: ModalController, public dataservice: DataService, private storage: Storage, private menu: MenuController) { }

  ngOnInit() {

  }

  ionViewWillEnter() {

    //get posts from storage and save in rev
    this.storage.get('arr').then((val) => {

      this.allReviews = val;

      if (this.allReviews !== []) {
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
        this.ionViewWillEnter()
      });
    return await modal.present();
  }

  async deleteModal(id) {


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {



      if (result.value) {

        let newarr = this.allReviews.splice(id, 1);




        this.storage.set('arr', this.allReviews);

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  openMenu() {
    this.menu.toggle();
  }


}


