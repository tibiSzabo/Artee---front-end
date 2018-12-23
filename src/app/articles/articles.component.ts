import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() listMode = true;

  constructor() { }

  ngOnInit() {
  }

}
