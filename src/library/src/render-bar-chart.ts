import zingchart from 'zingchart';

export function renderBarChart({ nativeElement }) {
    const elementId = 'barChart';

    nativeElement.setAttribute('id', elementId);
    nativeElement.style.height = '100%';

    const config = {
        'graphset': [{
            'type': 'bar3d',
            'series': [
                {
                    'values': [20, 20, 15, 25, 20, 30, 45, 25, 15, 20, 25, 40],
                    'facets': {
                        'front': {
                            'background-color': '#f13255 #293668'
                        },
                        'right': {
                            'background-color': '#f13255 #293668'
                        },
                        'left': {
                            'background-color': '#f13255 #293668'
                        },
                        'top': {
                            'background-color': '#f13255'
                        },
                        'bottom': {
                            'background-color': '#f13255'
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
