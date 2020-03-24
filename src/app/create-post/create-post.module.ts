import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePostPageRoutingModule } from './create-post-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePostPageRoutingModule
  ],
  declarations: []
})
export class CreatePostPageModule {}
