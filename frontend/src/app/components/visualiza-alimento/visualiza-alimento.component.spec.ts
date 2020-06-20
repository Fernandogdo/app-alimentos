import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizaAlimentoComponent } from './visualiza-alimento.component';

describe('VisualizaAlimentoComponent', () => {
  let component: VisualizaAlimentoComponent;
  let fixture: ComponentFixture<VisualizaAlimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizaAlimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizaAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
