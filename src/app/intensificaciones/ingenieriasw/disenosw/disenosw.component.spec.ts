import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoswComponent } from './disenosw.component';

describe('DisenoswComponent', () => {
  let component: DisenoswComponent;
  let fixture: ComponentFixture<DisenoswComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisenoswComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenoswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
