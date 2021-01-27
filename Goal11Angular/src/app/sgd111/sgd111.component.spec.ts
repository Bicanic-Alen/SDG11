import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sgd111Component } from './sgd111.component';

describe('Sgd111Component', () => {
  let component: Sgd111Component;
  let fixture: ComponentFixture<Sgd111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sgd111Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sgd111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
