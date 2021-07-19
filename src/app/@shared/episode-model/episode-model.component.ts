import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/app/@models/episode.model';

@Component({
  selector: 'episode-model',
  templateUrl: './episode-model.component.html',
  styleUrls: ['./episode-model.component.scss']
})
export class EpisodeModelComponent implements OnInit {

  @Input() episode!: Episode;

  constructor() { }

  ngOnInit(): void {
  }

}
