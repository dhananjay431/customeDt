import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Customers4ListComponent } from './customers4-list.component';

describe('Customers4ListComponent', () => {
  let component: Customers4ListComponent;
  let fixture: ComponentFixture<Customers4ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Customers4ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Customers4ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
