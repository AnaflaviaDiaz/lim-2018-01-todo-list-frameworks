import { TestBed, inject } from '@angular/core/testing';

import { CrudFireIngredientsService } from './crud-fire-ingredients.service';

describe('CrudFireIngredientsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudFireIngredientsService]
    });
  });

  it('should be created', inject([CrudFireIngredientsService], (service: CrudFireIngredientsService) => {
    expect(service).toBeTruthy();
  }));
});
