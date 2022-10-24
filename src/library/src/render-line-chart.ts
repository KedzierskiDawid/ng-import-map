import zingchart from 'zingchart';

export function renderLineChart({ nativeElement }) {
    const elementId = 'lineChart';

    nativeElement.setAttribute('id', elementId);
    nativeElement.style.height = '100%';

    const config = {
        'graphset': [{
            'type': 'line3d',
            'series': [
                {
                    'values': [20, 20, 15, 25, 20, 30, 45, 25, 15, 20, 25, 40],
                    'line-color': '#293668',
                    'facets': {
                        'front': {
                            'background-color': '#293668 #f13255'
                        },
                        'right': {
                            'background-color': '#293668 #f13255'
                        },
                        'left': {
                            'background-color': '#293668 #f13255'
                        },
                        'top': {
                            'background-color': '#293668 #f13255'
                        },
                        'bottom': {
                            'background-color': '#293668 #f13255'
                        }
                    }
                },
            ],
            '3d-aspect': {
                'true3d': false
            },
            'scaleX': {
                'values': [
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
                ],
                'placement': 'default',
                'tick': {
                    'size': 58,
                    'placement': 'cross'
                },
                'itemsOverlap': false,
                'item': {
                    'offsetY': -50
                }
            },
        }]
    };

    zingchart.render({
        id: elementId,
        data: config,
        height: '100%',
        width: '100%'
    });
}
