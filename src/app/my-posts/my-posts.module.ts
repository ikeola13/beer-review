import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPostsPageRoutingModule } from './my-posts-routing.module';

import { MyPostsPage } from './my-posts.page';
import { IonicRatingModule } from 'ionic-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPostsPageRoutingModule,
    IonicRatingModule
  ],
  declarations: [MyPostsPage]
})
export class MyPostsPageModule {}
