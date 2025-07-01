import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchFlightComponent } from './user-search-flight.component';

describe('UserSearchFlightComponent', () => {
  let component: UserSearchFlightComponent;
  let fixture: ComponentFixture<UserSearchFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSearchFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
