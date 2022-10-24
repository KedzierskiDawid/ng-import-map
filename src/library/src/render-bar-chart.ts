import { BarController, BarElement, CategoryScale, Chart, Legend, LinearScale } from 'chart.js';

export function renderBarChart({ nativeElement }) {
    const canvasRef = nativeElement.appendChild(document.createElement('canvas'));

    Chart.register(
        BarElement,
        BarController,
        CategoryScale,
        LinearScale,
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
            backgroundColor: '#f13255',
            borderColor: '#f13255',
            data: [20, 20, 15, 25, 20, 30, 45, 25, 15, 20, 25, 40],
        }]
    };

    const options = {
        scales: {
            y: {
                ticks: { color: '#f13255' },
                grid: {
                    color: '#f13255',
                    borderColor: '#f13255',
                }
            },
            x: {
                ticks: { color: '#f13255' },
                grid: {
                    color: '#f13255',
                    borderColor: '#f13255',
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#f13255',
                }
            }
        },
    };

    const config = {
        type: 'bar',
        data: data,
        options: options,
    };

    // @ts-ignore
    const myChart = new Chart(ctx, config);
}
