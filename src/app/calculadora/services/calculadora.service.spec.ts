import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('deve criar o serviço', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5', inject([CalculadoraService], () => {
    const soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  }));

  it('deve garantiar que 1 - 4 = - 3', inject([CalculadoraService], () => {
    const subtracao = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
    expect(subtracao).toEqual(-3);
  }));

  it('deve garantir que 1 / 4 = 0.25', inject([CalculadoraService], () => {
    const divisao = service.calcular(1, 4, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(0.25);
  }));

  it('deve garantir que 1 * 4 = 4', inject([CalculadoraService], () => {
    const multiplicacao = service.calcular(1, 4, CalculadoraService.MULTIPLICACAO);
    expect(multiplicacao).toEqual(4);
  }));

  it('deve retornar 0 para operação inválida', inject([CalculadoraService], () => {
    const resultado = service.calcular(1, 4, '%');
    expect(resultado).toEqual(0);
  }));
});
