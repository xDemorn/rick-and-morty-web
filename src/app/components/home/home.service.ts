import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Character } from 'src/app/@models/character.model';
import { Info } from 'src/app/@models/info.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService implements Resolve<any> {

  infoCharacters: Info;
  infoLocations: Info;
  infoEpisodes: Info;

  constructor(private _httpClient: HttpClient) {
    this.infoCharacters = new Info({});
    this.infoLocations = new Info({});
    this.infoEpisodes = new Info({});
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      Promise.all([
        this.GetCharacters(),
        this.GetLocations(),
        this.GetEpisodes()
      ]).then(
        ([files]) => {
          resolve();
        },
        reject
      );
    });
  }

  public GetCharacters(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(environment.API_character).subscribe((data: any) => {
        this.infoCharacters = data.info;
        resolve(this.infoCharacters);
      }, reject);
    });
  }

  public GetRandomCharacters(): Promise<Character[]> {
    return new Promise((resolve, reject) => {
      const random = `${this.GetRandom()},${this.GetRandom()},${this.GetRandom()}`;
      this._httpClient.get(environment.API_character + '/' + random).subscribe((data: any) => {
        resolve(data);
      }, reject);
    });
  }

  public GetLocations(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(environment.API_location).subscribe((data: any) => {
        // console.log(data)
        this.infoLocations = data.info;
        resolve(this.infoLocations);
      }, reject);
    });
  }

  public GetEpisodes(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(environment.API_episode).subscribe((data: any) => {
        // console.log(data)
        this.infoEpisodes = data.info;
        resolve(this.infoEpisodes);
      }, reject);
    });
  }

  private GetRandom(): number {
    const min = 1;
    const max = this.infoCharacters.count;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
