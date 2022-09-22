import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDisplayCardComponent } from './main-display-card.component';

describe('MainDisplayCardComponent', () => {
  let component: MainDisplayCardComponent;
  let fixture: ComponentFixture<MainDisplayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDisplayCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDisplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
