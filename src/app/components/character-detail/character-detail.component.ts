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
  
  location1!: number;
  location2!: number;
  
  loadedEpisodes: boolean = false;

  constructor(private _characterService: CharacterDetailService) { }

  ngOnInit(): void {
    this.character = this._characterService.character;
    this.episodes = this._characterService.episodes;
    
    let split: string[] = this.character.origin.url.split('/');
    this.location1 = Number(split[split.length - 1]);
    
    split = this.character.location.url.split('/');
    this.location2 = Number(split[split.length - 1]);
  }
  
  public loadEpisodes(): void {
    this._characterService.getEpisode();
    this.loadedEpisodes = true;
  }

}
