//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
//import { HttpHeaders } from '@angular/common/http';
/*
  Generated class for the LcProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/



@Injectable()
export class LcProvider {
  apikey = '206a9e4d19560528';
  url2;
 private url:string;
  constructor(private jsonp:Jsonp) {
   this.url = 'http://autocomplete.wunderground.com/aq?query=';
   // console.log('Hello LcProvider Provider');
  }

  
  
   getconfig(cit){
    return this.jsonp.request(this.url+cit+'&cb=JSONP_CALLBACK');

      // return this.http.get('http://api.wunderground.com/api/206a9e4d19560528/forecast/q/zmw:94125.1.99999.json');
   }
   

}
