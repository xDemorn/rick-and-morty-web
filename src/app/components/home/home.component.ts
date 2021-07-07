import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sections: any[] = [
    {
      icon: 'face',
      name: 'Total number of characters',
      count: 0,
    },
    {
      icon: 'not_listed_location',
      name: 'Total numbers of locations',
      count: 0,
    },
    {
      icon: 'dvr',
      name: 'Total numbers of episodes',
      count: 0,
    }
  ];

  constructor(private _homeService: HomeService) { }

  ngOnInit(): void {
    this._homeService.GetCharacters()
        .then(data => {
          this.sections[0].count = data.info.count;
        })
        .catch(err => console.log(err))
        .finally(() => {
          this._homeService.GetLocations()
              .then(data => {
                this.sections[1].count = data.info.count;
              })
              .catch(err => console.log(err))
              .finally(() => {
                this._homeService.GetEpisodes()
                    .then(data => {
                      this.sections[2].count = data.info.count;
                    })
                    .catch(err => console.log(err))
                    .finally(() => {
                      
                    });
              });
        });
  }

}
