import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterchildComponent } from './routerchild.component';

describe('RouterchildComponent', () => {
  let component: RouterchildComponent;
  let fixture: ComponentFixture<RouterchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
