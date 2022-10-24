import { Directive, ElementRef } from '@angular/core';
import { renderLineChart } from '@org/custom-chart.js';

@Directive({
  selector: '[appLineChart]'
})
export class LineChartDirective {
  constructor(private el: ElementRef) {
    this.renderLineChart();
  }

  private renderLineChart(): void {
    renderLineChart({ nativeElement: this.el.nativeElement });
  }
}
