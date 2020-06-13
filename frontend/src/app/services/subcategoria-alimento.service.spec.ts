import { TestBed } from '@angular/core/testing';

import { SubcategoriaAlimentoService } from './subcategoria-alimento.service';

describe('SubcategoriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubcategoriaAlimentoService = TestBed.get(SubcategoriaAlimentoService);
    expect(service).toBeTruthy();
  });
});
