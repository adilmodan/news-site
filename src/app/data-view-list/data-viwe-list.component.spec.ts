import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataViweListComponent } from './data-viwe-list.component';

describe('DataViweListComponent', () => {
  let component: DataViweListComponent;
  let fixture: ComponentFixture<DataViweListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataViweListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataViweListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
