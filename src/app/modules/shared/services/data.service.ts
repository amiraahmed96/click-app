import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getALL(url: string, urlParams?) {
    return this.http.get(url, urlParams);
  }
}
