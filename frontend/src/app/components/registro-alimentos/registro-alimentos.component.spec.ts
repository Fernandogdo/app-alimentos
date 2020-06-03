import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAlimentosComponent } from './registro-alimentos.component';

describe('RegistroAlimentosComponent', () => {
  let component: RegistroAlimentosComponent;
  let fixture: ComponentFixture<RegistroAlimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroAlimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
