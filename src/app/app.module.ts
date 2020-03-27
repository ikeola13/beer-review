import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPipe } from './login.pipe';
import { CreatePostPage } from './Modals/create-post/create-post.page';

import { IonicRatingModule } from 'ionic-rating';
import { IonicStorageModule } from '@ionic/storage';
import { ViewPostPage } from './Modals/view-post/view-post.page';
import { EditPostPage } from './Modals/edit-post/edit-post.page';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [AppComponent, LoginPipe, CreatePostPage, ViewPostPage,EditPostPage],
  entryComponents: [CreatePostPage,ViewPostPage,EditPostPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicRatingModule, IonicStorageModule.forRoot(), FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
