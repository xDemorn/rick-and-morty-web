import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterDetailService } from './components/character-detail/character-detail.service';
import { CharacterComponent } from './components/character/character.component';
import { CharacterService } from './components/character/character.service';
import { HomeComponent } from './components/home/home.component';
import { HomeService } from './components/home/home.service';
import {LocationComponent} from "./components/location/location.component";
import {EpisodeComponent} from "./components/episode/episode.component";
import {EpisodeService} from "./components/episode/episode.service";
import {LocationService} from "./components/location/location.service";

const routes: Routes = [
  {
    path: '',
    // loadChildren: './components/home/home.module#HomeModule',
    component: HomeComponent,
    resolve  : {
        service: HomeService
    }
  },
  {
    path: 'character',
    // loadChildren: './components/character/character.module#CharacterModule',
    component: CharacterComponent,
    resolve  : {
        service: CharacterService
    }
  },
  {
    path: 'character/:id',
    // loadChildren: './components/character/character.module#CharacterModule',
    component: CharacterDetailComponent,
    resolve  : {
        service: CharacterDetailService
    }
  },
  {
    path: 'location',
    component: LocationComponent,
    resolve  : {
      service: LocationService
    }
  },
  {
    path: 'episode',
    component: EpisodeComponent,
    resolve  : {
      service: EpisodeService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
