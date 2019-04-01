import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationlinksComponent } from './navigationlinks.component';

describe('NavigationlinksComponent', () => {
  let component: NavigationlinksComponent;
  let fixture: ComponentFixture<NavigationlinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationlinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
