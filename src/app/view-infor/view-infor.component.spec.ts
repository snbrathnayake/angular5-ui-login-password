import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInforComponent } from './view-infor.component';

describe('ViewInforComponent', () => {
  let component: ViewInforComponent;
  let fixture: ComponentFixture<ViewInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
