import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { FollowPage } from '../pages/follow/follow';
import { ProgramPage } from '../pages/program/program';
import { RemotePage } from '../pages/remote/remote';
import { SettingsPage } from '../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { K9settingsComponent } from '../components/k9settings/k9settings';

import { ConnectionSettingsProvider } from '../providers/connection-settings/connection-settings';
import { NodeRedWebSocketProvider } from '../providers/node-red-web-socket/node-red-web-socket';

@NgModule({
  declarations: [
    MyApp,
    ProgramPage,
    RemotePage,
    SettingsPage,
    FollowPage,
    K9settingsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RemotePage,
    ProgramPage,
    SettingsPage,
    FollowPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ConnectionSettingsProvider,
    NodeRedWebSocketProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
