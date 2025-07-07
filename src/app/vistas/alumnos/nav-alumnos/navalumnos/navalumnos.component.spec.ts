import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavalumnosComponent } from './navalumnos.component';

describe('NavalumnosComponent', () => {
  let component: NavalumnosComponent;
  let fixture: ComponentFixture<NavalumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavalumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
