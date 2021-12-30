import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgeCholesterolRate, AgeCholesterolRateData } from '../data/agecholesterolRate';

const urlServer = 'http://localhost:5000';
@Injectable()
export class AgecholesterolRateService extends AgeCholesterolRateData {
  constructor(private http: HttpClient) {
    super();
  }
  private ageCholesterolRateList: AgeCholesterolRate[]  = [
    {age: 0, cholesterolRate: 120},
    {age: 10, cholesterolRate: 122},
    {age: 20, cholesterolRate: 126},
    {age: 30, cholesterolRate: 134},
    {age: 40, cholesterolRate: 150},
    {age: 50, cholesterolRate: 182},
    {age: 60, cholesterolRate: 240},
    {age: 70, cholesterolRate: 350},
    {age: 80, cholesterolRate: 460},
    {age: 90, cholesterolRate: 587},
  ];

  getAgeCholesterolRate(): Observable<AgeCholesterolRate[]> {
    // return this.http.get<AgeHeartDisease[]>(urlServer + '/ageheartdisease');
    return observableOf(this.ageCholesterolRateList);
  }
}
