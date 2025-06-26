import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarGradosComponent } from './asignar-grados.component';

describe('AsignarGradosComponent', () => {
  let component: AsignarGradosComponent;
  let fixture: ComponentFixture<AsignarGradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarGradosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarGradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
