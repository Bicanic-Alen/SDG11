import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sgd11bComponent } from './sgd11b.component';

describe('Sgd11bComponent', () => {
  let component: Sgd11bComponent;
  let fixture: ComponentFixture<Sgd11bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sgd11bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sgd11bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
