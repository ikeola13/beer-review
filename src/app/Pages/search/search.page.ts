import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MenuController, ModalController } from '@ionic/angular';
import { ViewPostPage } from '../../Modals/view-post/view-post.page';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  flavorArray = [];
  allPosts = [];
  searchResult : any[];
  results;

  constructor(private storage: Storage, private menu:MenuController, public modalController: ModalController) { }

  form = [
    { val: 'crisp', isChecked: false },
    { val: 'hop', isChecked: false },
    { val: 'malt', isChecked: false },
    { val: 'dark', isChecked: false },
    { val: 'smoke', isChecked: false },
    { val: 'fruit', isChecked: false }
  ];


  ngOnInit() {
    this.storage.get('arr').then((val) => {
      
      this.allPosts = val;
    });
  }

  ionViewWillEnter(){
    this.storage.get('arr').then((val) => {
      this.allPosts = val;

      if(val){
this.results = true
      }else{
        this.results = false
      }
      
    });


  }

  flavors(status,value){
    if(status.detail.checked == true){
      this.flavorArray.push(value);
    }else if(status.detail.checked == false){
      let filteredArray = this.flavorArray.filter(e => e !== value)
      this.flavorArray = filteredArray;
    }
  }

  submit(){
   


    let id_filter = this.flavorArray;
    let filtered = this.allPosts.filter(function(item) {
    return id_filter.indexOf(item.flavor) !== -1;
});

this.searchResult = filtered;
   
  
  }

  openMenu(){
    this.menu.toggle();
  }

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

