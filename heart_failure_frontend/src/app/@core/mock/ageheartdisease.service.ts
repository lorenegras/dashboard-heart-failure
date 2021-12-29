import { AgeHeartDisease, AgeHeartDiseaseData } from '../data/ageheartdisease';
import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const urlServer = 'http://localhost:5000';
@Injectable()
export class AgeheartdiseaseService extends AgeHeartDiseaseData {
  constructor(private http: HttpClient){
    super();
  }
  private ageHeartDiseaseList: AgeHeartDisease[]  = [
    {age: '0 à 15 ans', countHeartDisease: 32, heartdisease: 0 },
    {age: '16 à 30 ans', countHeartDisease: 65,  heartdisease: 1 },
    {age: '30 à 45 ans', countHeartDisease: 232, heartdisease: 1 },
    {age: '45 à 60 ans', countHeartDisease: 432,  heartdisease: 0 },
    {age: '60 ans +', countHeartDisease: 832,  heartdisease: 0 },
  ];

  getAgeHeartDisease(): Observable<AgeHeartDisease[]> {
    return this.http.get<AgeHeartDisease[]>(urlServer + '/ageheartdisease');
    // return observableOf(this.ageHeartDiseaseList);
  }
}
