import { Category } from '../shared/category.model';
import { Time } from '@angular/common';

export class Article {

  public id: number;
  public title: string;
  public image: string;
  public description: string;
  public category: Category;
  public date: Date;
  private _time: Time;

  constructor(id: number, title: string, image: string, description: string, category: Category, date: Date) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.description = description;
    this.category = category;
    this.date = date;
  }

  set time(value: Time) {
    this._time = value;
  }
}
