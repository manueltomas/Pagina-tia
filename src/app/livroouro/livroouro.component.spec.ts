import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroouroComponent } from './livroouro.component';

describe('LivroouroComponent', () => {
  let component: LivroouroComponent;
  let fixture: ComponentFixture<LivroouroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivroouroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroouroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
