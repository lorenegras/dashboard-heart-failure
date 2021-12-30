import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { AgeHeartDiseaseData } from 'app/@core/data/ageheartdisease';
import { PersonsData } from 'app/@core/data/persons';

@Component({
  selector: 'ngx-chartjs-pie-age-cardiacdisease',
  templateUrl: './chartjs-pie-age-cardiacdisease.component.html',
  styleUrls: ['./chartjs-pie-age-cardiacdisease.component.scss'],
})
export class ChartjsPieAgeCardiacdiseaseComponent implements OnDestroy {

  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService, private ageheartdiseaseService: AgeHeartDiseaseData,
    private personsService: PersonsData) {
      // this.personsService.getPersons().subscribe(persons => {
      //   console.log(persons);
      // });
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      this.ageheartdiseaseService.getAgeHeartDisease().subscribe(ageheartdiseaseList => {
        const labels = ageheartdiseaseList
        .filter(ageheartdisease => ageheartdisease.heartdisease === 1)
        .map((ageheartdisease => ageheartdisease.age));

        const countheartdisease = ageheartdiseaseList
        .filter(ageheartdisease => ageheartdisease.heartdisease === 1)
        .map((ageheartdisease => ageheartdisease.countHeartDisease));

        const colors: any = config.variables;
        const chartjs: any = config.variables.chartjs;
        this.data = {
          labels: labels,
          datasets: [{
            data: countheartdisease,
            // tslint:disable-next-line:max-line-length
            backgroundColor: ['#F44336', '#B71C1C', '#EC407A', '#9C27B0', '#4A148C', '#7E57C2'],
          }],
        };

        this.options = {
          responsive: true,
          scales: {
            xAxes: [
              {
                display: false,
              },
            ],
            yAxes: [
              {
                display: false,
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
