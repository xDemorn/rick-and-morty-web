import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/character/character.component';
import { CharacterService } from './components/character/character.service';
import { HomeComponent } from './components/home/home.component';
import { HomeService } from './components/home/home.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve  : {
        service: HomeService
    }
  },
  {
    path: 'character',
    component: CharacterComponent,
    resolve  : {
        service: CharacterService
    }
  },
  {
    path: 'location',
    component: HomeComponent
  },
  {
    path: 'episode',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
