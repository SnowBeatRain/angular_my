/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomelistComponent } from './homelist.component';

describe('HomelistComponent', () => {
  let component: HomelistComponent;
  let fixture: ComponentFixture<HomelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
