import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventchangeComponent } from './preventchange.component';

describe('PreventchangeComponent', () => {
  let component: PreventchangeComponent;
  let fixture: ComponentFixture<PreventchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
