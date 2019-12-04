import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterparamsComponent } from './routerparams.component';

describe('RouterparamsComponent', () => {
  let component: RouterparamsComponent;
  let fixture: ComponentFixture<RouterparamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterparamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterparamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
