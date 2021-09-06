import { Injectable } from '@angular/core';
import { Info } from "../../@models/info.model";
import { BehaviorSubject } from "rxjs";
import { HttpClient} from "@angular/common/http";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {environment} from "../../../environments/environment";
import { Location } from "../../@models/location.model";

@Injectable({
  providedIn: 'root'
})
export class LocationService implements Resolve<any> {

  locations: Location[];
  info: Info;

  page: number;

  info$: BehaviorSubject<any>;

  constructor(private _httpClient: HttpClient, ) {
    this.locations = [];
    this.info = {count: 0, pages: 0, next: null, prev: null};
    this.page = 1;

    this.info$ = new BehaviorSubject({});
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      Promise.all([
        // this.getCharacters(this.page),
      ]).then(
          ([files]) => {
            resolve();
          },
          reject
      );
    });
  }

  public getLocations(page: number, filters?: string): Promise<any> {
    return new Promise((resolve, reject) => {

      if (filters == undefined && filters == null) {
        filters = '';
      }

      this._httpClient.get(`${environment.API_location}/?page=${page}${filters}`)
          .subscribe((data: any) => {
            this.page = page;
            // console.log(data);
            this.info = new Info(data.info);
            this.locations = data.results.map((character: any) => {return new Location(character)});

            this.info$.next({info: this.info, locations: this.locations, page: this.page});

            resolve({info: this.info, locations: this.locations});
          }, reject);
    });
  }
}
