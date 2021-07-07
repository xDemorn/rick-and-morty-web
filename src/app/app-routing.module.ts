import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'character',
    component: HomeComponent
  },
  {
    path: 'character/:id',
    component: HomeComponent
  },
  {
    path: 'location',
    component: HomeComponent
  },
  {
    path: 'location/:id',
    component: HomeComponent
  },
  {
    path: 'episode',
    component: HomeComponent
  },
  {
    path: 'episode/:id',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
