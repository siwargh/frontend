import { Place } from './iplace';

export class IPost {
   id: string;
  author: string;
  content: any;
  create_date?: Date;
  publishing_date?: Date;
  categorie: string;
  place: Place;
}
