### How to install and run the project

#### Installation

1. Run `cd src/bar-chart-app && npm install`
2. Run `cd src/line-chart-app && npm install`
3. Run `cd src/library && npm install`

#### Running

1. Run `cd src/bar-chart-app && npm run ng build`
2. Run `cd src/line-chart-app && npm run ng build`
3. Run `cd src/library && npm run build`
4. Run `cd src && npx http-server .`

With the default configuration of `http-server`, you should be able to access the application under `localhost:8080`.

#### Branches
* `example-1-no-sharing` - just two Angular application without sharing `chart.js` between them
* `example-2-cdn` - get `chart.js` from CDN and share between applications
* `example-3-library-abstracted` - hide `chart.js` behind an abstraction and share the new, custom library between applications
* `example-4-zingchart` - change the implementation in one single place and render 3D charts with gradient
