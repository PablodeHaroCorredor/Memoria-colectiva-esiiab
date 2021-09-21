import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngRequisitiosComponent } from './ing-requisitios.component';

describe('IngRequisitiosComponent', () => {
  let component: IngRequisitiosComponent;
  let fixture: ComponentFixture<IngRequisitiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngRequisitiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngRequisitiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
