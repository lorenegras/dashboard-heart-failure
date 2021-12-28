import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { ChartModule } from 'angular2-chartjs';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { ChartjsLineAgeCholesterolComponent } from './chartjs-line-age-cholesterol/chartjs-line-age-cholesterol.component';
import { ChartjsBarSexBloodpressureComponent } from './chartjs-bar-sex-bloodpressure/chartjs-bar-sex-bloodpressure.component';
import { ChartjsPieAgeCardiacdiseaseComponent } from './chartjs-pie-age-cardiacdisease/chartjs-pie-age-cardiacdisease.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    ChartModule
  ],
  declarations: [
    DashboardComponent,
    ChartjsLineAgeCholesterolComponent,
    ChartjsBarSexBloodpressureComponent,
    ChartjsPieAgeCardiacdiseaseComponent,
  ],
})
export class DashboardModule { }
