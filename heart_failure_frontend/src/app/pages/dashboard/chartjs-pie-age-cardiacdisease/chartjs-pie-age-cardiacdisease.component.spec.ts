import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsPieAgeCardiacdiseaseComponent } from './chartjs-pie-age-cardiacdisease.component';

describe('ChartjsPieAgeCardiacdiseaseComponent', () => {
  let component: ChartjsPieAgeCardiacdiseaseComponent;
  let fixture: ComponentFixture<ChartjsPieAgeCardiacdiseaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartjsPieAgeCardiacdiseaseComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartjsPieAgeCardiacdiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
