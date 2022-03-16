import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeripheralAuxComponent } from './peripheral-aux.component';

describe('PeripheralAuxComponent', () => {
  let component: PeripheralAuxComponent;
  let fixture: ComponentFixture<PeripheralAuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeripheralAuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeripheralAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
