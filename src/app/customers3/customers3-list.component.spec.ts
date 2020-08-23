import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Customers3ListComponent } from './customers3-list.component';

describe('Customers3ListComponent', () => {
  let component: Customers3ListComponent;
  let fixture: ComponentFixture<Customers3ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Customers3ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Customers3ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
