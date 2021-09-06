import { Component, OnInit } from '@angular/core';
import {Info} from "../../@models/info.model";
import {Character} from "../../@models/character.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {LocationService} from "./location.service";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  info?: Info;
  locations?: Location[];

  page?: number;

  form: FormGroup;
  isFiltering: boolean = false;
  filters: string = '';

  constructor(private _locationService: LocationService, private _formBuilder: FormBuilder) {
    this.form = this.CreateForm();
  }

  ngOnInit(): void {
    this._locationService.info$.subscribe(result => {
      this.info = result.info;
      this.locations = result.locations;
      this.page = result.page;
    });
  }

  nextPage(): void {
    this._locationService.getLocations(this._locationService.page + 1, this.filters);
  }

  prevPage(): void {
    this._locationService.getLocations(this._locationService.page - 1, this.filters);
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
      this._locationService.getLocations(1, this.filters);
    }
  }

  public ClearFilters(): void {
    this.isFiltering = false;
    this.filters = '';
    this.form = this.CreateForm();
    this._locationService.getLocations(1, this.filters);
  }

}
