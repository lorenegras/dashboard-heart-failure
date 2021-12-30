import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { SexBloodPressureData } from 'app/@core/data/sexbloodpressure';

@Component({
  selector: 'ngx-chartjs-bar-sex-bloodpressure',
  templateUrl: './chartjs-bar-sex-bloodpressure.component.html',
  styleUrls: ['./chartjs-bar-sex-bloodpressure.component.scss'],
})
export class ChartjsBarSexBloodpressureComponent implements OnDestroy {

  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService,  private sexbloodpressureService: SexBloodPressureData) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.sexbloodpressureService.getBloodPressure().subscribe(bloodpressuresList => {
        const labels = bloodpressuresList
        .map((bloodPressure => bloodPressure.sex));

        const bloodpressure = bloodpressuresList
        .map((bloodPressure => bloodPressure.bloodPressure));

        this.data = {
          labels: labels,
          datasets: [{
            label: 'pression arteriele',
            minBarLength: 2,
            data: [...bloodpressure, 0],

          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
          ],
          borderWidth: 1,
        }],
        };

        this.options = {
          responsive: true,
          legend: {
            labels: {
              fontColor: chartjs.textColor,
            },
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false,
                  color: chartjs.axisLineColor,
                },
                ticks: {
                  fontColor: chartjs.textColor,
                },
              },
            ],
            yAxes: [
              {
                beginAtZero: true,
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
        };
      });
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
