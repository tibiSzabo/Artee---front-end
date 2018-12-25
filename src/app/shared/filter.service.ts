import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public filterText: string;
  public filterChangedSubject = new Subject<string>();

  constructor() { }

  updateFilterText(newText: string) {
    this.filterText = newText;
    this.filterChangedSubject.next(this.filterText);
  }

}
