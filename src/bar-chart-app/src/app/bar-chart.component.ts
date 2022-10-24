import { Component } from '@angular/core';

@Component({
  selector: 'bar-chart-app',
  template: `<div appBarChart></div>`,
  styles: [`
    :host {
      background-color: #e3e4e5;
      padding: 10px;
    }
  `],
})
export class BarChartComponent {}
