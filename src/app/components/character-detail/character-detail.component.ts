import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/@models/character.model';
import { Episode } from 'src/app/@models/episode.model';
import { CharacterDetailService } from './character-detail.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  character!: Character;
  episodes!: Episode[];
  
  loadedEpisodes: boolean = false;

  constructor(private _characterService: CharacterDetailService) { }

  ngOnInit(): void {
    this.character = this._characterService.character;
    this.episodes = this._characterService.episodes;
  }
  
  public loadEpisodes(): void {
    this._characterService.getEpisode();
    this.loadedEpisodes = true;
  }

}
