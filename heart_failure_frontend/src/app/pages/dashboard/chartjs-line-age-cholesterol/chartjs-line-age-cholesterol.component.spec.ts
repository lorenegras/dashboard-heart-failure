import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsLineAgeCholesterolComponent } from './chartjs-line-age-cholesterol.component';

describe('ChartjsLineAgeCholesterolComponent', () => {
  let component: ChartjsLineAgeCholesterolComponent;
  let fixture: ComponentFixture<ChartjsLineAgeCholesterolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartjsLineAgeCholesterolComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartjsLineAgeCholesterolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
