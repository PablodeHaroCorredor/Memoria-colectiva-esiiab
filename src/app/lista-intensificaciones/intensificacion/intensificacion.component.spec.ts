import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntensificacionComponent } from './intensificacion.component';

describe('IntensificacionComponent', () => {
  let component: IntensificacionComponent;
  let fixture: ComponentFixture<IntensificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntensificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntensificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
