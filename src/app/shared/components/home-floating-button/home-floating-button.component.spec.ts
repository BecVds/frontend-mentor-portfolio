import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFloatingButtonComponent } from './home-floating-button.component';

describe('HomeFloatingButtonComponent', () => {
  let component: HomeFloatingButtonComponent;
  let fixture: ComponentFixture<HomeFloatingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFloatingButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFloatingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
