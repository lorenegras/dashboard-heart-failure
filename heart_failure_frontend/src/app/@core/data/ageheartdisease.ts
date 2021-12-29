import { Observable } from 'rxjs';

export interface AgeHeartDisease {
  ageCat: string;
  countHeartDisease: number;
}

export abstract class AgeHeartDiseaseData {
  abstract getAgeHeartDisease(): Observable<AgeHeartDisease[]>;
}
