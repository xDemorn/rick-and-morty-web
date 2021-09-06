import { Injectable } from '@angular/core';
import { Info } from "../../@models/info.model";
import { BehaviorSubject } from "rxjs";
import { Episode } from "../../@models/episode.model";
import { HttpClient } from "@angular/common/http";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {environment} from "../../../environments/environment";
import {Character} from "../../@models/character.model";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService implements Resolve<any> {

  episodes: Episode[];
  info: Info;

  page: number;

  info$: BehaviorSubject<any>;

  constructor(private _httpClient: HttpClient, ) {
    this.episodes = [];
    this.info = {count: 0, pages: 0, next: null, prev: null};
    this.page = 1;

    this.info$ = new BehaviorSubject({});
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      Promise.all([
        this.getEpisodes(this.page),
      ]).then(
          ([files]) => {
            resolve();
          },
          reject
      );
    });
  }

  public getEpisodes(page: number, filters?: string): Promise<any> {
    return new Promise((resolve, reject) => {

      if (filters == undefined && filters == null) {
        filters = '';
      }

      this._httpClient.get(`${environment.API_episode}/?page=${page}${filters}`)
          .subscribe((data: any) => {
            this.page = page;
            // console.log(data);
            this.info = new Info(data.info);
            this.episodes = data.results.map((character: any) => {return new Episode(character)});

            this.info$.next({info: this.info, episodes: this.episodes, page: this.page});

            resolve({info: this.info, characters: this.episodes});
          }, reject);
    });
  }
}
