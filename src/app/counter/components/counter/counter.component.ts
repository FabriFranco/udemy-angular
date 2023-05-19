import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
    template: `
    <h2>1- {{title}}</h2>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="reset()">Resetear</button>
    <button (click)="increaseBy(-1)">-1</button>
    <br>
    <br>
    <b>{{counter}}</b>
    <hr>
    `
})

export class CounterComponent implements OnInit {
  public title: string  = 'Componente Counter';
  public counter: number = 10;

  constructor() { }
  increaseBy(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }

  ngOnInit() { }
}
