import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsBarSexBloodpressureComponent } from './chartjs-bar-sex-bloodpressure.component';

describe('ChartjsBarSexBloodpressureComponent', () => {
  let component: ChartjsBarSexBloodpressureComponent;
  let fixture: ComponentFixture<ChartjsBarSexBloodpressureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartjsBarSexBloodpressureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartjsBarSexBloodpressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
