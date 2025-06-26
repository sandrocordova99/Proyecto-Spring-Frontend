import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearGradosComponent } from './crear-grados.component';

describe('CrearGradosComponent', () => {
  let component: CrearGradosComponent;
  let fixture: ComponentFixture<CrearGradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearGradosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearGradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
