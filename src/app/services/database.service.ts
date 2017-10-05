import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';


@Injectable()
export class DatabaseService {

  constructor(private http: Http) { }

  saveData(data: object) {
      return this.http.post('https://firstproject-c50c8.firebaseio.com/movchar.json', data);
  }

  getData() {
      return this.http.get('https://firstproject-c50c8.firebaseio.com/movchar.json')
      .map(
        (response: Response) => {
            const data = response.json();
            return data;
        }
      )
      .catch(
        (error: Response) => {
            return Observable.throw('There was something wrong in the retrieval of the data...');
        }
      );
  }

}
