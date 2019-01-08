import { Component, OnInit } from '@angular/core';
import { fadeTrigger } from '../shared/animations';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.html',
  styleUrls: ['./pagenotfound.css'],
  animations: [fadeTrigger]
})
export class PageNotFound implements OnInit {

  constructor() { }

  ngOnInit() {
  }



}
