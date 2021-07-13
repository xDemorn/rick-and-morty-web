import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/@models/character.model';

@Component({
  selector: 'character-model',
  templateUrl: './character-model.component.html',
  styleUrls: ['./character-model.component.scss']
})
export class CharacterModelComponent implements OnInit {

  @Input() character!: Character;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

}
