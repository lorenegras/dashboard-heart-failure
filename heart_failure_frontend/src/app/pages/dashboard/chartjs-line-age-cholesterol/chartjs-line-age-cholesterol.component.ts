import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
  selector: 'chartjs-line-age-cholesterol',
  templateUrl: './chartjs-line-age-cholesterol.component.html',
  styleUrls: ['./chartjs-line-age-cholesterol.component.scss']
})
export class ChartjsLineAgeCholesterolComponent implements OnDestroy {

  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['0', '10', '20', '30', '40', '50', '60','70','80','90'],
        datasets: [{
          data: [65, 59, 80, 81, 56, 55, 40,110,125,139],
          label: 'Series A',
          backgroundColor: NbColorHelper.hexToRgbA(colors.primary, 0.3),
          borderColor: colors.primary,
        }
        ],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
