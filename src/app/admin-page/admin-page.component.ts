import { Component, OnInit } from '@angular/core';
import { fadeTrigger } from '../shared/animations';
import { BackendService } from '../shared/backend.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
  animations: [fadeTrigger]
})
export class AdminPageComponent implements OnInit {
  mode = 'menu';

  constructor(private backendService: BackendService) { }

  ngOnInit() {
  }

}
