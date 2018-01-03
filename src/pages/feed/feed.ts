import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  //variaveis;
  public nome_usuario:string = "João da Roça";

  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider: MovieProvider) {
  }

  public soma(): void{
    console.log('Função Ok');
  }

  ionViewDidLoad() {
    this.soma();
    this.movieProvider.getLastMovie().subscribe(
      data=>{
        const response = (data as any);
        const obj = JSON.parse(response._body);
        console.log(obj);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
