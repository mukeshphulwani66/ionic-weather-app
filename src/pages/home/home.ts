import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';
//import { LcProvider} from '../../providers/lc/lc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  weather2:any;
  location:{
    city:String,
    state:String
  }

  constructor(public navCtrl: NavController,
    private weatherProvider:WeatherProvider,
     private storage:Storage) {

  }

  ionViewWillEnter(){
    this.storage.get('location').then((val)=>{
      if(val != null){
      this.location = JSON.parse(val);
      }else{
        this.location={
          city:'bhilai',
          state:'india'
                   }
      }

      this.weatherProvider.getWeather(this.location.city, this.location.state) 
      .subscribe((weather:any) =>{
        this.weather=weather.current_observation;
      });

    });
   
  //this.lc.getconfig().subscribe((weather2:any)=>{
   //console.log(weather2);
  //  this.location.city = 'durg';
  //  this.location.state = weather2.country;
 // })
 
}

  

}
