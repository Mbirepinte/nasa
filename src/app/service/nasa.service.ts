import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { imgOfTheDay } from '../models/imgOfTheDay';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

constructor(public http : HttpClient) { }

getImageOfTheDay() : Observable<imgOfTheDay> {
  return this.http.get<imgOfTheDay>("https://api.nasa.gov/planetary/apod?api_key=hekeyPZQCUjbcQ1WtPL8T6eLiJPyCRtGuw2yItUU")
}
}
