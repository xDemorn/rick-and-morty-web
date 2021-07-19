import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeModelComponent } from './episode-model.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    EpisodeModelComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatButtonModule,
  ],
  exports: [
    EpisodeModelComponent
  ]
})
export class EpisodeModelModule { }
