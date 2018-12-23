import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  public X: number = 0;
  public Y: number = 0;
  constructor() { }

  savePosition(x:number, y:number) {
    this.X = x;
    this.Y = y;

  }

  resetPosition() {
    this.X = 0;
    this.Y = 0;
  }

  restorePosition() {
    this.resetPosition();
  }
}

