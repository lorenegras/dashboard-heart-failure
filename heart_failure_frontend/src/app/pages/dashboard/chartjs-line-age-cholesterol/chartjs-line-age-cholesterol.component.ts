import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';
import { AgeCholesterolRateData } from 'app/@core/data/agecholesterolRate';

@Component({
  selector: 'ngx-chartjs-line-age-cholesterol',
  templateUrl: './chartjs-line-age-cholesterol.component.html',
  styleUrls: ['./chartjs-line-age-cholesterol.component.scss'],
})
export class ChartjsLineAgeCholesterolComponent implements OnDestroy {

  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService, private agecholesterolService: AgeCholesterolRateData) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.agecholesterolService.getAgeCholesterolRate().subscribe(agecholesterolRateList => {
        const labels = agecholesterolRateList
        .map((agecholesterol => agecholesterol.age));

        const agecholesterolRate = agecholesterolRateList
        .map((agecholesterol => agecholesterol.cholesterolRate));

        this.data = {
          labels: labels,
          datasets: [{
            data: agecholesterolRate,
            label: 'taux de cholesterol en fonction de l\'age',
            backgroundColor: NbColorHelper.hexToRgbA('#4A148C', 0.3),
            borderColor: '#4A148C',
          },
          ],
        };

        this.options = {
          responsive: true,
          aspectRatio: 4,
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

    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
