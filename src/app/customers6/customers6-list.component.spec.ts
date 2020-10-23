import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Customers6ListComponent } from './customers6-list.component';

describe('Customers6ListComponent', () => {
  let component: Customers6ListComponent;
  let fixture: ComponentFixture<Customers6ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Customers6ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Customers6ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
