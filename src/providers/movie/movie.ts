import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3/";
  private api_key = "e3199bcbbf0e22059ff04dd9ca94b1c1";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLastMovie(){
    return this.http.get(this.baseApiPath + "movie/popular?api_key=" + this.api_key);
  }

}
