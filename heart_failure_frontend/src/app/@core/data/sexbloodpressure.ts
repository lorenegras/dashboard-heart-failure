import { Observable } from 'rxjs';

export interface SexBloodPressure {
  sex: string;
  bloodPressure: number;
}

export abstract class SexBloodPressureData {
  abstract getBloodPressure(): Observable<SexBloodPressure[]>;
}
