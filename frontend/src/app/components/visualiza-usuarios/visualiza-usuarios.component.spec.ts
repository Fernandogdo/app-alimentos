import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizaUsuariosComponent } from './visualiza-usuarios.component';

describe('VisualizaUsuariosComponent', () => {
  let component: VisualizaUsuariosComponent;
  let fixture: ComponentFixture<VisualizaUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizaUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
