import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {IonicStorageModule } from '@ionic/storage';
import { JsonpModule } from '@angular/http';
import { AboutPage } from '../pages/about/about';
//import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WeatherProvider } from '../providers/weather/weather';
import { LcProvider } from '../providers/lc/lc';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    
    HomePage,
    TabsPage,
    SettingsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule ,
    IonicStorageModule.forRoot(),
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
   
    HomePage,
    TabsPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider,
    LcProvider
  ]
})
export class AppModule {}
