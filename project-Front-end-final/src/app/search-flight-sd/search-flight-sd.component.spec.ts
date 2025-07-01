import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlightSDComponent } from './search-flight-sd.component';

describe('SearchFlightSDComponent', () => {
  let component: SearchFlightSDComponent;
  let fixture: ComponentFixture<SearchFlightSDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFlightSDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFlightSDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
