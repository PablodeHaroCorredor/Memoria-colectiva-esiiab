import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesosIngswComponent } from './procesos-ingsw.component';

describe('ProcesosIngswComponent', () => {
  let component: ProcesosIngswComponent;
  let fixture: ComponentFixture<ProcesosIngswComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesosIngswComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesosIngswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
