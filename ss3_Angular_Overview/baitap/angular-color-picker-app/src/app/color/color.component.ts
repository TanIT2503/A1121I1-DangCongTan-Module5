import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  colorPick = '#135378';

  changeColor(colorPick) {
    this.colorPick = colorPick;
  }
}
