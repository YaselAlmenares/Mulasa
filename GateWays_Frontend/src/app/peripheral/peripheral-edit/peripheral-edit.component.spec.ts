import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeripheralEditComponent } from './peripheral-edit.component';

describe('PeripheralEditComponent', () => {
  let component: PeripheralEditComponent;
  let fixture: ComponentFixture<PeripheralEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeripheralEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeripheralEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
