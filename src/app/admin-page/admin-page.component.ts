import { Component, OnInit } from '@angular/core';
import { fadeTrigger } from '../shared/animations';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
  animations: [fadeTrigger]
})
export class AdminPageComponent implements OnInit {
  mode = 'menu';

  constructor() { }

  ngOnInit() {
  }

}
