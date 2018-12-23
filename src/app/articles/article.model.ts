import { Category } from '../shared/category.model';

export class Article {
  public id: number;
  public title: string;
  public image: string;
  public description: string;
  public category: Category;
  public date: Date;

  constructor(id:number, title: string, image: string, description: string, category: Category, date: Date) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.description = description;
    this.category = category;
    this.date = date;
  }
}
