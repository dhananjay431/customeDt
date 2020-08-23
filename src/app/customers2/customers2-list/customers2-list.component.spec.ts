import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Customers2ListComponent } from './customers2-list.component';

describe('Customers2ListComponent', () => {
  let component: Customers2ListComponent;
  let fixture: ComponentFixture<Customers2ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Customers2ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Customers2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
