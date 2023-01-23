import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const newsApiUrl= "https://newsapi.org/v2/top-headlines?country=rs&apiKey=d9aae43615194a78a2a5924c5c0b9243";

const techologyUrl = "https://newsapi.org/v2/top-headlines?country=rs&category=technology&apiKey=d9aae43615194a78a2a5924c5c0b9243"

const businessUrl = "https://newsapi.org/v2/top-headlines?country=rs&category=business&apiKey=d9aae43615194a78a2a5924c5c0b9243"

const sportUrl = "https://newsapi.org/v2/top-headlines?country=rs&category=sport&apiKey=d9aae43615194a78a2a5924c5c0b9243"

@Injectable({
  providedIn: 'root'
})
export class WebnewsService {

  constructor( private http: HttpClient) { }
  // newsapiurl


  getTopHeading():Observable<any>{
    return this.http.get(`${newsApiUrl}`);
  }

  getTehnology():Observable<any>{
    return this.http.get(`${techologyUrl}`);
  }

  getBusiness():Observable<any>{
    return this.http.get(`${businessUrl}`);
  }

  getSports():Observable<any>{
    return this.http.get(`${sportUrl}`);
  }

}
