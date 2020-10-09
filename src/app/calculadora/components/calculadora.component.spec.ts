import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../services/calculadora.service';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ],
      providers: [
        CalculadoraService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve garantir que 3 + 2 = 5', () => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'));
    let btnSoma = fixture.debugElement.query(By.css('#btnSoma'));
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));
    let resultado = '5';
    let evento = 'click';

    btn3.triggerEventHandler(evento, null);
    fixture.detectChanges();

    btnSoma.triggerEventHandler(evento, null);
    fixture.detectChanges();

    btn2.triggerEventHandler(evento, null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler(evento, null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual(resultado);
  })

  it('deve garantir que 3 - 2 = 1', () => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'));
    let btnSubtracao = fixture.debugElement.query(By.css('#btnSubtracao'));
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));
    let resultado = '1';
    let evento = 'click';

    btn3.triggerEventHandler(evento, null);
    fixture.detectChanges();

    btnSubtracao.triggerEventHandler(evento, null);
    fixture.detectChanges();

    btn2.triggerEventHandler(evento, null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler(evento, null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual(resultado);
  })

});
