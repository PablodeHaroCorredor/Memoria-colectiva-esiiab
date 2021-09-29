import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOptativasComponent } from './lista-optativas.component';

describe('ListaOptativasComponent', () => {
  let component: ListaOptativasComponent;
  let fixture: ComponentFixture<ListaOptativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaOptativasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOptativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
