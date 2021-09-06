import {Component, Input, OnInit} from '@angular/core';
import {Episode} from "../../@models/episode.model";

@Component({
  selector: 'location-model',
  templateUrl: './location-model.component.html',
  styleUrls: ['./location-model.component.scss']
})
export class LocationModelComponent implements OnInit {

  @Input() location!: Location;

  constructor() { }

  ngOnInit(): void {
  }

}
