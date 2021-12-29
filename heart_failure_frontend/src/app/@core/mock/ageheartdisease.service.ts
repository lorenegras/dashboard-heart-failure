import { AgeHeartDisease, AgeHeartDiseaseData } from '../data/ageheartdisease';
import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AgeheartdiseaseService extends AgeHeartDiseaseData {

  private ageHeartDiseaseList: AgeHeartDisease[]  = [
    {ageCat: '0 à 15 ans', countHeartDisease: 32 },
    {ageCat: '16 à 30 ans', countHeartDisease: 65 },
    {ageCat: '30 à 45 ans', countHeartDisease: 232 },
    {ageCat: '45 à 60 ans', countHeartDisease: 432 },
    {ageCat: '60 ans +', countHeartDisease: 832 },
  ];

  getAgeHeartDisease(): Observable<AgeHeartDisease[]> {
    return observableOf(this.ageHeartDiseaseList);
  }
}
