import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  visible = false;

  constructor() { }

  toggle() {
    this.visible = true;
    console.log('not visible');
    setTimeout(() => {this.visible = false;
      console.log('visible'); }, 4000);
  }
}
