import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditSubcategoriaComponent } from './modal-edit-subcategoria.component';

describe('ModalEditSubcategoriaComponent', () => {
  let component: ModalEditSubcategoriaComponent;
  let fixture: ComponentFixture<ModalEditSubcategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditSubcategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditSubcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
