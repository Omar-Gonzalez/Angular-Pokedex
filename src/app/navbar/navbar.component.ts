import {Component, OnInit, Input} from '@angular/core';
import {Config} from '../config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: []
})
export class NavbarComponent implements OnInit {
  @Input()  config: Config;

  constructor() {
  }

  async ngOnInit() {
  }
}
