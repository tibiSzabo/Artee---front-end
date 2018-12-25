import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public filterText: string;
  public filterChangedSubject = new Subject<string>();
  public searchMode = new Subject<boolean>();


  constructor() { }

  updateFilterText(newText: string) {
    this.filterText = newText;
    this.filterChangedSubject.next(this.filterText);
  }

  enterSearchMode() {
    this.searchMode.next(true);
  }

  leaveSearchMode() {
    this.searchMode.next(false);
  }
}
