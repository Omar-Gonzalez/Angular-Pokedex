import {Component, OnInit, Input} from '@angular/core';
import {Config} from '../config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: []
})
export class FooterComponent implements OnInit {
  @Input() config: Config;

  constructor() {
  }

  async ngOnInit() {
  }

}
