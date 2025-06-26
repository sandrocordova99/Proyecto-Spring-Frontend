import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarCursosComponent } from './borrar-cursos.component';

describe('BorrarCursosComponent', () => {
  let component: BorrarCursosComponent;
  let fixture: ComponentFixture<BorrarCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
