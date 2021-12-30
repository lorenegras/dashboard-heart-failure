import { Observable } from 'rxjs';

export interface SexBloodPressure {
  age: number;
  bloodPressure: number;
}

export abstract class SexBloodPressureData {
  abstract getBloodPressure(): Observable<SexBloodPressure[]>;
}
