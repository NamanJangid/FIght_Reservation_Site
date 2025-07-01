import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlightIdComponent } from './search-flight-id.component';

describe('SearchFlightIdComponent', () => {
  let component: SearchFlightIdComponent;
  let fixture: ComponentFixture<SearchFlightIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFlightIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFlightIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
