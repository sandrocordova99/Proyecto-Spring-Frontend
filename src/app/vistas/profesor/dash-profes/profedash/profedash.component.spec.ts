import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfedashComponent } from './profedash.component';

describe('ProfedashComponent', () => {
  let component: ProfedashComponent;
  let fixture: ComponentFixture<ProfedashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfedashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
