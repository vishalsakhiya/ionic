import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LogInPage } from '../pages/LogIn/LogIn';
import { RegistrationPage } from '../pages/Registration/Registration';
import { MapPage } from '../pages/Map/Map';
import { ChatPage } from '../pages/Chat/Chat';
import { ProfilePage } from '../pages/Profile/Profile';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogInPage,
    RegistrationPage,
    MapPage,
    ChatPage,
    ProfilePage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      scrollAssist: false,
      autoFocusAssist: false
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogInPage,
    RegistrationPage,
    MapPage,
    ChatPage,
    ProfilePage
  ],
  providers: [
    LocationTrackerProvider,
    BackgroundGeolocation,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule {}
