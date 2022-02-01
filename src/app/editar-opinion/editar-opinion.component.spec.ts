import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOpinionComponent } from './editar-opinion.component';

describe('EditarOpinionComponent', () => {
  let component: EditarOpinionComponent;
  let fixture: ComponentFixture<EditarOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarOpinionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
