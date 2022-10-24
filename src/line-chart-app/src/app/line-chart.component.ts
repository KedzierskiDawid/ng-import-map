import { Component } from '@angular/core';

@Component({
  selector: 'line-chart-app',
  template: `<div appLineChart></div>`,
  styles: [`
    :host {
      background-color: #e3e4e5;
      padding: 10px;
    }
  `],
})
export class LineChartComponent {}
