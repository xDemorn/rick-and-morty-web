import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeModelComponent } from './episode-model.component';

describe('EpisodeModelComponent', () => {
  let component: EpisodeModelComponent;
  let fixture: ComponentFixture<EpisodeModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
