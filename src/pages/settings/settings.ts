import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {HomePage} from '../home/home';
import { LcProvider} from '../../providers/lc/lc';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export  class SettingsPage {

  city:String;
  state:String;
 
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
               private storage :Storage,private lc:LcProvider) {
  this.storage.get('location').then((val)=>{
    if(val != null){
      let location = JSON.parse(val);
      this.city = location.city;
      this.state = location.state; 
    }else{
      this.city = 'bhilai,india';
      this.state = ''; 
    }
  })
  
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  saveForm(){
    let location = {
      city : this.city,
      state : this.state
    }
    //console.log(location);
    this.storage.set('location',JSON.stringify(location));
    this.navCtrl.push(HomePage);
  }
  valuess:String=''; gval='';
  cityd=[]; 
  
  onkey(event:any){if(event.target.value !='NaN' ){
    this.cityd=[];
    this.valuess=event.target.value;// event.key;
   // console.log(this.valuess);
   
    return this.lc.getconfig(this.valuess).subscribe((data1:any) =>{
       // this.valuess = data1;
      // console.log('here');
        console.log(data1);
       // console.log('here');
        for(let i in data1._body.RESULTS){
        // console.log(data1._body.RESULTS[i].name);
         this.cityd[i]=data1._body.RESULTS[i].name;
        }
        // console.log(this.valuess);
    });
  }
     else if(event.key =='Backspace') {
      this.valuess = this.valuess.slice(0,-1);
  }

  }
  displayval(event){

    this.onkey(event); 
 
  }
   writecity(no){
     this.city = this.cityd[no];
     this.saveForm();
   }

}
