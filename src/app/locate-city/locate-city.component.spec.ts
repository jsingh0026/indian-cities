import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocateCityComponent } from './locate-city.component';

describe('LocateCityComponent', () => {
  let component: LocateCityComponent;
  let fixture: ComponentFixture<LocateCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocateCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocateCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
