import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranstionComponent } from './transtion.component';

describe('TranstionComponent', () => {
  let component: TranstionComponent;
  let fixture: ComponentFixture<TranstionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranstionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranstionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
