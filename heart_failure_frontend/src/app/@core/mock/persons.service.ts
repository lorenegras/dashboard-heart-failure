import { AgeHeartDisease, AgeHeartDiseaseData } from '../data/ageheartdisease';
import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Persons, PersonsData } from '../data/persons';
import { HttpClient } from '@angular/common/http';

const urlServer = 'http://localhost:5000';
@Injectable()
export class PersonsService extends PersonsData {
  constructor(private http: HttpClient) {
    super();
  }

  getPersons(): Observable<Persons[]> {
    return this.http.get<Persons[]>(urlServer + '/persons');
  }
}
