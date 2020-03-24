import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPipe } from './login.pipe';
import { CreatePostPage } from './create-post/create-post.page';

import { IonicRatingModule } from 'ionic-rating';
import { IonicStorageModule } from '@ionic/storage';
import { ViewPostPage } from './view-post/view-post.page';




@NgModule({
  declarations: [AppComponent, LoginPipe, CreatePostPage, ViewPostPage],
  entryComponents: [CreatePostPage,ViewPostPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicRatingModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
