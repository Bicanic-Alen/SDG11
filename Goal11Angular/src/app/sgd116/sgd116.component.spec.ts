import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sgd116Component } from './sgd116.component';

describe('Sgd116Component', () => {
  let component: Sgd116Component;
  let fixture: ComponentFixture<Sgd116Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sgd116Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sgd116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
