import {Component, OnInit} from '@angular/core';
import {ConfigService} from './config.service';
import {Config} from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Pokedex';
  config: Config;

  constructor(private configService: ConfigService) {
  }

  async ngOnInit() {
    this.config = await this.configService.fetchConfig();
  }
}
