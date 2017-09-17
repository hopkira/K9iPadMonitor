import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConnectionSettings } from './connection'
import { Storage } from '@ionic/storage';
import { NodeRedWebSocketProvider } from '../node-red-web-socket/node-red-web-socket'

/*
  Generated class for the ConnectionSettingsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ConnectionSettingsProvider {

  constructor(private storage: Storage, private noderedwebsocket: NodeRedWebSocketProvider) {
    console.log('Hello ConnectionSettingsProvider Provider');
  }
  saveConnectionSettings(connection:ConnectionSettings):string{
    console.log('Saving connection in ConnectionSettingsProvider');
    this.storage.set("NRURL", connection.URL);
    this.storage.set("NRdir", connection.dir);
    this.storage.set("NRport", String(connection.port));
    this.storage.set("NRpassword", connection.password);
    console.log("NodeREDConnectionProvider - I stored in SQLLite:");
    console.log(connection.URL);
    console.log(connection.dir);
    console.log(connection.port);
    console.log(connection.password);
    return "OK"
  }
  retrieveConnectionSettings():ConnectionSettings {
    var connection = new ConnectionSettings;
    console.log('Retrieving connection from ConnectionSettingsProvider');
    connection.URL = String(this.storage.get("NRURL"));
    connection.dir = String(this.storage.get("NRdir"));
    connection.port = Number(this.storage.get("NRport"));
    connection.password = String(this.storage.get("NRpassword"));
    console.log("NodeREDConnectionProvider - I retrieved from SQLLite:");
    console.log(connection.URL);
    console.log(connection.dir);
    console.log(connection.port);
    console.log(connection.password);
    return connection
  }
  connect(connection:ConnectionSettings):string{
    let filler:string
    if (connection.dir=="") {filler="";} else {filler="/";}
    let NRwebsocket:string = "ws://"+ String(connection.URL) +":" + String(connection.port) + filler + String(connection.dir) +"/ws/k9";
    console.log("Connecting to " + String(NRwebsocket));
    //this.noderedwebsocket.connect(NRwebsocket);
    return "OK"
  }

}
