import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSubcategoriasComponent } from './registro-subcategorias.component';

describe('RegistroSubcategoriasComponent', () => {
  let component: RegistroSubcategoriasComponent;
  let fixture: ComponentFixture<RegistroSubcategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroSubcategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroSubcategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
