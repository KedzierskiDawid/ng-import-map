import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BarChartComponent } from './bar-chart.component';
import { BarChartDirective } from './bar-chart.directive';

@NgModule({
  declarations: [
    BarChartComponent,
    BarChartDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BarChartComponent]
})
export class AppModule { }
