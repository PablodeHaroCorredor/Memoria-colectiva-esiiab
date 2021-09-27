import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIntensificacionesComponent } from './lista-intensificaciones.component';

describe('ListaIntensificacionesComponent', () => {
  let component: ListaIntensificacionesComponent;
  let fixture: ComponentFixture<ListaIntensificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaIntensificacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaIntensificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
