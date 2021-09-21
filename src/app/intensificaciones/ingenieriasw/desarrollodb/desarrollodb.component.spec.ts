import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrollodbComponent } from './desarrollodb.component';

describe('DesarrollodbComponent', () => {
  let component: DesarrollodbComponent;
  let fixture: ComponentFixture<DesarrollodbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesarrollodbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrollodbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
