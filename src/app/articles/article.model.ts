import { Category } from '../shared/category.model';

export class Article {

  public id: number;
  public title: string;
  public image: string;
  public description: string;
  public category: Category;
  public date: number; // epoch

  constructor(title: string, image: string, description: string, category: Category, date: number) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.category = category;
    this.date = date;
  }

}
