import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../config.service';
import {Config} from '../config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [ConfigService]
})
export class NavbarComponent implements OnInit {
  config: Config;

  constructor(private service: ConfigService) {
  }

  async ngOnInit() {
    this.config = await this.service.fetchConfig();
  }
}
