import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MapPage } from '../Map/Map';
import { ChatPage } from '../Chat/Chat';
import { ProfilePage } from '../Profile/Profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root: any = MapPage;
  tab2Root: any = ChatPage;
  tab3Root: any = ProfilePage;

  constructor(public navCtrl: NavController) {
    
  }
  
  onLink(url: string) {
      window.open(url);
  }
}
