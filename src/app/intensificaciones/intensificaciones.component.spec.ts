import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntensificacionesComponent } from './intensificaciones.component';

describe('IntesificacionesComponent', () => {
  let component: IntensificacionesComponent;
  let fixture: ComponentFixture<IntensificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntensificacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntensificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
