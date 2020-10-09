import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numeroA: string;
  private numeroB: string;
  private resultado: number;
  private operacao: string;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  /**
   * Reinicia todos os operadores para os valores padrão.
   *
   * @return void
   */
  limpar(): void {
    this.numeroA = '0';
    this.numeroB = null;
    this.resultado = null;
    this.operacao = null;
  }
  /**
   * Adiciona o número selecionado para cálculo posterior.
   *
   * @param numero string
   */
  adicionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.numeroA = this.concatenarNumero(this.numeroA, numero);
    } else {
      this.numeroB = this.concatenarNumero(this.numeroB, numero);
    }
  }

  /**
   * Retorna o valor concatenado. Trata o separador decimal.
   *
   * @param numeroAtual string
   * @param numeroConcatenar string
   * @return string
   */
  concatenarNumero(numeroAtual: string, numeroConcatenar: string): string {

    if (numeroAtual === '0' || numeroAtual === null) {
      numeroAtual = '';
    }

    if (numeroConcatenar === '.' && numeroAtual === '') {
      return '0.';
    }

    if (numeroConcatenar === '.' && numeroAtual.indexOf('.') > -1 ) {
      return numeroAtual;
    }

    return numeroAtual + numeroConcatenar;
  }

  /**
   * Define a operação a ser realizada.
   *
   * @param operacao string
   * @return void
   */
  definirOperacao(operacao: string): void{
    if (this.operacao === null) {
      this.operacao = operacao;
    }

    if (this.numeroB !== null) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numeroA),
        parseFloat(this.numeroB),
        this.operacao
      );

      this.operacao = operacao;
      this.numeroA = this.resultado.toString();
      this.numeroB = null;
      this.resultado = null;
    }
  }
  /**
   * Efetua o calculo da operaçao.
   *
   * @return void
   */
  calcular(): void {
    if (this.numeroB !== null) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numeroA),
        parseFloat(this.numeroB),
        this.operacao
      );
    }
  }
  /**
   * Apresenta o resultado ou numero digitado na tela.
   *
   * @return string
   */
  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }

    if (this.numeroB !== null) {
      return this.numeroB;
    }

    return this.numeroA;
  }
}
