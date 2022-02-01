import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearOpinionComponent } from './crear-opinion.component';

describe('CrearOpinionComponent', () => {
  let component: CrearOpinionComponent;
  let fixture: ComponentFixture<CrearOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearOpinionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
