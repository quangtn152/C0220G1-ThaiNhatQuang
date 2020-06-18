import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  firstNumber: number;
  secondNumber: number;
  output: number;
  operator= '+';

  constructor() {
  }

  onFirstChange(value) {
    this.firstNumber = Number(value);
  }

  onSecondChange(value) {
    this.secondNumber = Number(value);
  }

  onSelectChange(value) {
    this.operator = value
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.output = this.firstNumber + this.secondNumber;
        break;
      case '-':
        this.output = this.firstNumber - this.secondNumber;
        break;
      case '*':
        this.output = this.firstNumber * this.secondNumber;
        break;
      case '/':
        this.output = this.firstNumber / this.secondNumber;
        break;
    }
  }

  ngOnInit(): void {
  }

}
