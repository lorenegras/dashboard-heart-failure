import { Observable } from 'rxjs';

export interface AgeCholesterolRate {
  age: number;
  cholesterolRate: number;
}

export abstract class AgeCholesterolRateData {
  abstract getAgeCholesterolRate(): Observable<AgeCholesterolRate[]>;
}
