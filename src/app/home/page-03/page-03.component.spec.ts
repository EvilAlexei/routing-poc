import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page03Component } from './page-03.component';

describe('Page03Component', () => {
  let component: Page03Component;
  let fixture: ComponentFixture<Page03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
