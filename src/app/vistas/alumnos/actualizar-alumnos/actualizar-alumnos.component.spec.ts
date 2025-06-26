import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAlumnosComponent } from './actualizar-alumnos.component';

describe('ActualizarAlumnosComponent', () => {
  let component: ActualizarAlumnosComponent;
  let fixture: ComponentFixture<ActualizarAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
