import {Injectable} from '@angular/core';
import {Config} from './config';
import {endpoints} from './api.endpoints';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config: Config;

  constructor() {
  }

  async fetchConfig() {
    const response = await fetch(endpoints.config);
    const data = await response.json();
    this.config = new Config(data);
    return this.config;
  }
}
