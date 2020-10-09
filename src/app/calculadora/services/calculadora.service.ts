/**
 * Serviço responsável por executar as operações da calculadora.
 *
 * @author Douglas Sumita <douglas.sumita@gmail.com
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /* Define as constantes utilizadas para identificar
     as operações de cálculo */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Método que calcula uma operação matemática dado dois numeros.
   * Suporta as operações soma, subtração, divisão e multiplicação.
   *
   * @param numeroA number
   * @param numeroB number
   * @param operacao string Operação a ser executada.
   */
  calcular(numeroA: number, numeroB: number, operacao: string): number {

    let resultado: number;

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = numeroA + numeroB;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = numeroA - numeroB;
        break;
      case CalculadoraService.DIVISAO:
        resultado = numeroA / numeroB;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = numeroA * numeroB;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
