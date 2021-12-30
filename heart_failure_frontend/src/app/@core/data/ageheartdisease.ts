import { Observable } from 'rxjs';

export interface AgeHeartDisease {
  age: string;
  countHeartDisease: number;
  heartdisease: number;
}

export abstract class AgeHeartDiseaseData {
  abstract getAgeHeartDisease(): Observable<AgeHeartDisease[]>;
}
