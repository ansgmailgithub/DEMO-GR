import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  constructor(
    private httpClient: HttpClient
  ) { }
  get(): Observable<any> {
    return this.httpClient.get('https://raw.githubusercontent.com/vega/vega/master/docs/data/us-state-capitals.json');
  }
}
