import { Component } from '@angular/core';
import { ConnectionSettingsProvider } from '../../providers/connection-settings/connection-settings';
import { ConnectionSettings } from '../../providers/connection-settings/connection';

/**
 * Generated class for the K9settingsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'k9-settings',
  templateUrl: 'k9settings.html'
})
export class K9settingsComponent {

  K9settings = new ConnectionSettings();

  constructor(private connection: ConnectionSettingsProvider) {
    console.log('Hello K9settingsComponent Component');
  }

  getFiller(directory) {
    if (directory == undefined || directory.length == 0) {return "";} else {return "/";}
  }

  connect() {
    console.log(this.K9settings);
    this.connection.saveConnectionSettings(this.K9settings);
    this.connection.connect(this.K9settings);
    }

}
