import { Directive, ElementRef } from '@angular/core';
import { renderBarChart } from '@org/custom-chart.js';

@Directive({
  selector: '[appBarChart]'
})
export class BarChartDirective {
  constructor(private el: ElementRef) {
    this.renderBarChart();
  }

  private renderBarChart(): void {
    renderBarChart({ nativeElement: this.el.nativeElement });
  }
}
