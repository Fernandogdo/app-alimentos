import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalObjetosComponent } from './modal-objetos.component';

describe('ModalObjetosComponent', () => {
  let component: ModalObjetosComponent;
  let fixture: ComponentFixture<ModalObjetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalObjetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalObjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
