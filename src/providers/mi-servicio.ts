import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MiServicio provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MiServicio {

  private url: string = "http://restcountries.eu/rest/v1/all";

  constructor(public http: Http) {  
  }

  public getPaises()
  {
    return this.http.get(this.url).map(
      data => data.json());
  }
}
