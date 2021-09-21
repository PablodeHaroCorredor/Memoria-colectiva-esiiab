import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadSistemasswComponent } from './seguridad-sistemassw.component';

describe('SeguridadSistemasswComponent', () => {
  let component: SeguridadSistemasswComponent;
  let fixture: ComponentFixture<SeguridadSistemasswComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguridadSistemasswComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguridadSistemasswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
