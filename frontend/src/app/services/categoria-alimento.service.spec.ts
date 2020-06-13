import { TestBed } from '@angular/core/testing';

import { CategoriaAlimentoService } from './categoria-alimento.service';

describe('CategoriaAlimentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriaAlimentoService = TestBed.get(CategoriaAlimentoService);
    expect(service).toBeTruthy();
  });
});
