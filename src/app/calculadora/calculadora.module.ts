import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraComponent } from './components/calculadora.component';
import { CalculadoraService } from './services/calculadora.service';

@NgModule({
  declarations: [CalculadoraComponent],
  imports: [
    CommonModule // Sub-módulo da aplicação.
  ],
  exports: [
    CalculadoraComponent
  ],
  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }
