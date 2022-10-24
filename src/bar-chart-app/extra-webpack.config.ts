import { Configuration } from 'webpack';

export default (defaultConfig: Configuration) => {
  return {
    ...defaultConfig,
    externals: {
      'chart.js': 'chart.js',
      '@org/custom-chart.js': '@org/custom-chart.js'
    },
    experiments: {
      outputModule: true,
    },
    externalsType: 'module',
  }
}
