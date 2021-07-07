import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _httpClient: HttpClient) { }

  public GetCharacters(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(environment.API_character).subscribe(data => {
        console.log(data)
        resolve(data);
      }, reject);
    });
  }

  public GetLocations(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(environment.API_location).subscribe(data => {
        console.log(data)
        resolve(data);
      }, reject);
    });
  }

  public GetEpisodes(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(environment.API_episode).subscribe(data => {
        console.log(data)
        resolve(data);
      }, reject);
    });
  }
}
