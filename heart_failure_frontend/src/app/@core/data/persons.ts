import { Observable } from 'rxjs';

export interface Persons {
  sexe: string;
  age: number;
}

export abstract class PersonsData {
  abstract getPersons(): Observable<Persons[]>;
}
