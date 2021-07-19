import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Character } from 'src/app/@models/character.model';
import { Episode } from 'src/app/@models/episode.model';
import { environment } from 'src/environments/environment';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailService implements Resolve<any> {

  character!: Character;
  episodes: Episode[];
  numEpisodes: number;

  constructor(private _httpClient: HttpClient, private _snackBar: MatSnackBar) {
    this.episodes = [];
    this.numEpisodes = 0;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      Promise.all([
        this.getCharacter(route.params.id),
        // this.getEpisode()
      ]).then(
        ([files]) => {
          resolve();
        },
        reject
      );
    });
  }

  public getCharacter(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${environment.API_character}/${id}`)
          .subscribe((data: any) => {
            this.character = new Character(data);
            console.log(this.character);
            this.numEpisodes = this.character.episode.length;
            resolve(this.character);
          }, reject);
    });
  }

  public getEpisode(): Promise<any> | void {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('getting episode info')
        this._httpClient.get(this.character.episode[this.episodes.length]).subscribe((data: any) => {
          resolve(data);
          console.log(new Episode(data))
          this.episodes.push(new Episode(data));
          
          if (this.episodes.length != this.numEpisodes) {
            this.getEpisode();
          } else if (this.episodes.length == this.numEpisodes) {
            this._snackBar.open('All episodes are displayed!', 'CLOSE', {
              duration: 3000
            });
          }
          
        }, reject);
      }, 750);
    });
  }
}
