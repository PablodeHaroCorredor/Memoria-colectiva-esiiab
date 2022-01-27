import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptativaComponent } from './optativa.component';

describe('OptativaComponent', () => {
  let component: OptativaComponent;
  let fixture: ComponentFixture<OptativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptativaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
