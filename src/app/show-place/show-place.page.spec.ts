import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPlacePage } from './show-place.page';

describe('ShowPlacePage', () => {
  let component: ShowPlacePage;
  let fixture: ComponentFixture<ShowPlacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPlacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
