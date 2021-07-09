import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Character } from 'src/app/@models/character.model';
import { Info } from 'src/app/@models/info.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService implements Resolve<any> {

  characters: Character[];
  info: Info;

  page: number;
  
  info$: BehaviorSubject<any>;

  constructor(private _httpClient: HttpClient) {
    this.characters = [];
    this.info = {count: 0, pages: 0, next: null, prev: null};
    this.page = 1;
    
    this.info$ = new BehaviorSubject({});
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      Promise.all([
        this.getCharacters(this.page),
      ]).then(
        ([files]) => {
          resolve();
        },
        reject
      );
    });
  }

  public getCharacters(page: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${environment.API_character}/?page=${page}`)
          .subscribe((data: any) => {
            this.page = page;
            // console.log(data);
            this.info = new Info(data.info);
            this.characters = data.results.map((character: any) => {return new Character(character)});

            this.info$.next({info: this.info, characters: this.characters, page: this.page});

            resolve({info: this.info, characters: this.characters});
          }, reject);
    })
  }
}
