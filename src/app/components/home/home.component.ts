import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/@models/character.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sections: any[];
  characters: Character[];

  constructor(private _homeService: HomeService) {
    this.sections = [
      {
        icon: 'face',
        name: 'characters',
        url: '/character',
        count: 0,
      },
      {
        icon: 'not_listed_location',
        name: 'locations',
        url: '/location',
        count: 0,
      },
      {
        icon: 'dvr',
        name: 'episodes',
        url: '/episode',
        count: 0,
      }
    ];

    this.characters = [];
  }

  ngOnInit(): void {
    this.sections[0].count = this._homeService.infoCharacters.count;
    this.sections[1].count = this._homeService.infoLocations.count;
    this.sections[2].count = this._homeService.infoEpisodes.count;
  }

  loadRandomCharacters(): void {
    this._homeService.GetRandomCharacters().then((data: Character[]) => {
      this.characters = data;
    })
  }

}
