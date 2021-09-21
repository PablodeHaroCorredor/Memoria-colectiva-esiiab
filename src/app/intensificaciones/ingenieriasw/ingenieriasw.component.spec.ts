import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenieriaswComponent } from './ingenieriasw.component';

describe('IngenieriaswComponent', () => {
  let component: IngenieriaswComponent;
  let fixture: ComponentFixture<IngenieriaswComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngenieriaswComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngenieriaswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
