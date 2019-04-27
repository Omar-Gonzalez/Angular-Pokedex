import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../config.service';
import {Config} from '../config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [ConfigService]
})
export class FooterComponent implements OnInit {
  config: Config;

  constructor(private service: ConfigService) {
  }

  async ngOnInit() {
    this.config = await this.service.fetchConfig();
  }

}
