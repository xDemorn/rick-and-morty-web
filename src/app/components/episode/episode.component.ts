import { Component, OnInit } from '@angular/core';
import {Info} from "../../@models/info.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Episode} from "../../@models/episode.model";
import {EpisodeService} from "./episode.service";

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  info?: Info;
  episodes?: Episode[];

  page?: number;

  form: FormGroup;
  isFiltering: boolean = false;
  filters: string = '';

  constructor(private _episodeService: EpisodeService, private _formBuilder: FormBuilder) {
    this.form = this.CreateForm();
  }

  ngOnInit(): void {
    this._episodeService.info$.subscribe(result => {
      this.info = result.info;
      this.episodes = result.episodes;
      this.page = result.page;
    });
  }

  nextPage(): void {
    this._episodeService.getEpisodes(this._episodeService.page + 1, this.filters);
  }

  prevPage(): void {
    this._episodeService.getEpisodes(this._episodeService.page - 1, this.filters);
  }

  private CreateForm(): FormGroup {
    return this._formBuilder.group({
      name: new FormControl(''),
      status: new FormControl('all'),
      species: new FormControl(''),
      type: new FormControl(''),
      gender: new FormControl('all')
    });
  }

  public ApplyFilters(): void {

    let form = this.form.getRawValue();
    this.filters = '';

    if (form.name != '') {
      this.filters += `&name=${form.name}`;
    }

    if (form.status != 'all') {
      this.filters += `&status=${form.status}`;
    }

    if (form.species != '') {
      this.filters += `&species=${form.species}`;
    }

    if (form.type != '') {
      this.filters += `&type=${form.type}`;
    }

    if (form.gender != 'all') {
      this.filters += `&gender=${form.gender}`;
    }

    if (this.filters != '') {
      this.isFiltering = true;
      this._episodeService.getEpisodes(1, this.filters);
    }
  }

  public ClearFilters(): void {
    this.isFiltering = false;
    this.filters = '';
    this.form = this.CreateForm();
    this._episodeService.getEpisodes(1, this.filters);
  }

}
