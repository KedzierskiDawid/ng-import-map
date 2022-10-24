import { Directive, ElementRef } from '@angular/core';
import { CategoryScale, Chart, Legend, LinearScale, LineController, LineElement, PointElement } from 'chart.js';

@Directive({
  selector: '[appLineChart]'
})
export class LineChartDirective {
  constructor(private el: ElementRef) {
    this.renderLineChart();
  }

  private renderLineChart(): void {
    const canvasRef = this.el.nativeElement.appendChild(document.createElement('canvas'));

    Chart.register(
      LineElement,
      LineController,
      CategoryScale,
      LinearScale,
      PointElement,
      Legend,
    );

    const ctx = canvasRef.getContext('2d') as CanvasRenderingContext2D;

    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const data = {
      labels: labels,
      datasets: [{
        label: 'Avg(Sales) [MM]',
        backgroundColor: '#293668',
        borderColor: '#293668',
        color: '#293668',
        borderWidth: 5,
        data: [20, 20, 15, 25, 20, 30, 45, 25, 15, 20, 25, 40],
      }]
    };

    const options = {
      scales: {
        y: {
          ticks: { color: '#293668' },
          grid: {
            color: '#293668',
            borderColor: '#293668',
          }
        },
        x: {
          ticks: { color: '#293668' },
          grid: {
            color: '#293668',
            borderColor: '#293668',
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#293668',
          }
        }
      },
    };

    const config = {
      type: 'line',
      data: data,
      options: options,
    };

    // @ts-ignore
    const myChart = new Chart(ctx, config);
  }
}
