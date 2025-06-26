import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarCategoriasComponent } from './asignar-categorias.component';

describe('AsignarCategoriasComponent', () => {
  let component: AsignarCategoriasComponent;
  let fixture: ComponentFixture<AsignarCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
