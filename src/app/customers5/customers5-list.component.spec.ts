import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Customers5ListComponent } from './customers5-list.component';

describe('Customers5ListComponent', () => {
  let component: Customers5ListComponent;
  let fixture: ComponentFixture<Customers5ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Customers5ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Customers5ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
