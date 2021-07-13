import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterModelComponent } from './character-model.component';

describe('CharacterModelComponent', () => {
  let component: CharacterModelComponent;
  let fixture: ComponentFixture<CharacterModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
