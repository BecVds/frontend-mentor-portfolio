import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedButtonsComponent } from './selected-buttons.component';

describe('SelectedButtonsComponent', () => {
  let component: SelectedButtonsComponent;
  let fixture: ComponentFixture<SelectedButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
