import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class Movie extends BaseResourceModel {
  constructor(
    public vote_count?: number,
    public id?: number,
    public video?: boolean,
    public vote_average?: string,
    public title?: string,
    public popularity?: string,
    public poster_path?: string,
    public original_language?: string,
    public original_title?: string,
    public genre_ids?: [],
    public backdrop_path?: string,
    public adult?: boolean,
    public overview?: string,
    public realease_date?: string
  ) {
    super();
  }

  static fromJson(jsonData: any): Movie {
    return Object.assign(new Movie(), jsonData);
  }
}
