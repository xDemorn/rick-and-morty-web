import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CharacterComponent } from './components/character/character.component';

// MODULES

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { CharacterModelModule } from './@shared';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EpisodeModelModule } from './@shared/episode-model/episode-model.module';
import { LocationComponent } from './components/location/location.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { LocationModelComponent } from './@shared/location-model/location-model.component';
import {LocationModelModule} from "./@shared/location-model/location-model.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterComponent,
    CharacterDetailComponent,
    LocationComponent,
    EpisodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatListModule,
    MatTooltipModule,
    MatSnackBarModule,

    CharacterModelModule,
    EpisodeModelModule,
    LocationModelModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
