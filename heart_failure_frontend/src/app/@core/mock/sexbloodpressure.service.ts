import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgeCholesterolRate, AgeCholesterolRateData } from '../data/agecholesterolRate';
import { SexBloodPressure, SexBloodPressureData } from '../data/sexbloodpressure';

const urlServer = 'http://localhost:5000';
@Injectable()
export class SexbloodpressureService extends SexBloodPressureData {
  constructor(private http: HttpClient) {
    super();
  }
  private sexbloodpressureList: SexBloodPressure[]  = [
    {sex: 'H', bloodPressure: 120},
    {sex: 'F', bloodPressure: 212},
  ];

  getBloodPressure(): Observable<SexBloodPressure[]> {
    // return this.http.get<AgeHeartDisease[]>(urlServer + '/ageheartdisease');
    return observableOf(this.sexbloodpressureList);
  }
}
