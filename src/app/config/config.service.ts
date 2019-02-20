import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { ConfigSettings } from './config-settings.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { 
  }

  public getConfigSettings() : ConfigSettings{
    var configSettings = new ConfigSettings();
    configSettings.apiUrl = environment.apiUrl;
    return configSettings;
  }
}
