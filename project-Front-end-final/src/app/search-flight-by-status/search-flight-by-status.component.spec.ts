import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlightByStatusComponent } from './search-flight-by-status.component';

describe('SearchFlightByStatusComponent', () => {
  let component: SearchFlightByStatusComponent;
  let fixture: ComponentFixture<SearchFlightByStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFlightByStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFlightByStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
