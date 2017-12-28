import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
//import { IntroPage } from '../intro/intro';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //tab1Root = IntroPage;
  tab2Root = HomePage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;
  tab5Root = FeedPage;


  constructor() {

  }
}
