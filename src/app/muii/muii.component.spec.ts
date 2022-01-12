import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiiComponent } from './muii.component';

describe('MuiiComponent', () => {
  let component: MuiiComponent;
  let fixture: ComponentFixture<MuiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuiiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
