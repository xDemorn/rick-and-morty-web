import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/@models/character.model';
import { Info } from 'src/app/@models/info.model';
import { CharacterService } from './character.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  info?: Info;
  characters?: Character[];

  page?: number;

  form: FormGroup;
  isFiltering: boolean = false;
  filters: string = '';

  constructor(private _characterService: CharacterService, private _formBuilder: FormBuilder) {
    this.form = this.CreateForm();
  }

  ngOnInit(): void {
    this._characterService.info$.subscribe(result => {
      this.info = result.info;
      this.characters = result.characters;
      this.page = result.page;
    });
  }

  nextPage(): void {
    this._characterService.getCharacters(this._characterService.page + 1, this.filters);
  }

  prevPage(): void {
    this._characterService.getCharacters(this._characterService.page - 1, this.filters);
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
      this._characterService.getCharacters(1, this.filters);
    }
  }

  public ClearFilters(): void {
    this.isFiltering = false;
    this.filters = '';
    this.form = this.CreateForm();
    this._characterService.getCharacters(1, this.filters);
  }

}
