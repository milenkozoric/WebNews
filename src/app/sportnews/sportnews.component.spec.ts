import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportnewsComponent } from './sportnews.component';

describe('SportnewsComponent', () => {
  let component: SportnewsComponent;
  let fixture: ComponentFixture<SportnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportnewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
