import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSubcategoriaComponent } from './modal-subcategoria.component';

describe('ModalSubcategoriaComponent', () => {
  let component: ModalSubcategoriaComponent;
  let fixture: ComponentFixture<ModalSubcategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSubcategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSubcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
