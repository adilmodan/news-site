import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewNewsComponent } from './addnew-news.component';

describe('AddnewNewsComponent', () => {
  let component: AddnewNewsComponent;
  let fixture: ComponentFixture<AddnewNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
