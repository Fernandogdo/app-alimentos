import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaAlimentoComponent } from './edita-alimento.component';

describe('EditaAlimentoComponent', () => {
  let component: EditaAlimentoComponent;
  let fixture: ComponentFixture<EditaAlimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaAlimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
