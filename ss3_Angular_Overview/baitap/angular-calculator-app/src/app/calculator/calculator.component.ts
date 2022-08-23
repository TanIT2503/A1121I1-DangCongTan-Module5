import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  firstNum: number;
  secondNum: number;
  operation: string;
  result: number;
  changeFirstNum(firstNum) {
    this.firstNum = firstNum;
  }
  changeSecondNum(secondNum) {
    this.secondNum = secondNum;
  }
  changeOperation(operation) {
    this.operation = operation;
  }
  add(): number {
    return this.firstNum + this.secondNum;
  }
  sub(): number {
    return this.firstNum - this.secondNum;
  }
  multi(): number {
    return this.firstNum * this.secondNum;
  }
  div(): number {
    return this.firstNum / this.secondNum;
  }
  calculate() {
    switch (this.operation) {
      case '+': this.result = this.add(); break;
      case '-': this.result = this.sub(); break;
      case '*': this.result = this.multi(); break;
      case '/': this.result = this.div(); break;
    }
  }
}
