import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterModelComponent } from './character-model.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CharacterModelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    CharacterModelComponent
  ]
})
export class CharacterModelModule { }
