import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumndashComponent } from './alumndash.component';

describe('AlumndashComponent', () => {
  let component: AlumndashComponent;
  let fixture: ComponentFixture<AlumndashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumndashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumndashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
