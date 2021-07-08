import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/@models/character.model';
import { Info } from 'src/app/@models/info.model';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  info?: Info;
  characters?: Character[];

  page?: number;

  constructor(private _characterService: CharacterService) { }

  ngOnInit(): void {
    this._characterService.info$.subscribe(result => {
      this.info = result.info;
      this.characters = result.characters;
      this.page = result.page;
    });
  }

  nextPage(): void {
    this._characterService.getCharacters(this._characterService.page + 1);
  }

  prevPage(): void {
    this._characterService.getCharacters(this._characterService.page - 1);
  }

}
