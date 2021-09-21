import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalidadswComponent } from './calidadsw.component';

describe('CalidadswComponent', () => {
  let component: CalidadswComponent;
  let fixture: ComponentFixture<CalidadswComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalidadswComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalidadswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
