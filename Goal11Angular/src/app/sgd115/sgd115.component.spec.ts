import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sgd115Component } from './sgd115.component';




describe('Sgd115Component', () => {
  let component: Sgd115Component;
  let fixture: ComponentFixture<Sgd115Component>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sgd115Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sgd115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
