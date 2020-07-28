import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonHolaComponent } from './boton-hola.component';

describe('BotonHolaComponent', () => {
  let component: BotonHolaComponent;
  let fixture: ComponentFixture<BotonHolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonHolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonHolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
