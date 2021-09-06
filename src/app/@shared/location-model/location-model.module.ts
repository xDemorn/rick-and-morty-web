import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocationModelComponent} from "./location-model.component";
import {EpisodeModelComponent} from "../episode-model/episode-model.component";

@NgModule({
  declarations: [LocationModelComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LocationModelComponent
  ]
})
export class LocationModelModule { }
