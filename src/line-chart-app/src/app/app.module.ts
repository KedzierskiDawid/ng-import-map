import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LineChartComponent } from './line-chart.component';
import { LineChartDirective } from './line-chart.directive';

@NgModule({
  declarations: [
    LineChartComponent,
    LineChartDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LineChartComponent]
})
export class AppModule { }
