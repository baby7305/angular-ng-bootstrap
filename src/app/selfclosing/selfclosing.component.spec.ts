import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfclosingComponent } from './selfclosing.component';

describe('SelfclosingComponent', () => {
  let component: SelfclosingComponent;
  let fixture: ComponentFixture<SelfclosingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfclosingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfclosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
