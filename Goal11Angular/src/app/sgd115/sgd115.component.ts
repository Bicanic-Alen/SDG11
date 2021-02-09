import { Component, OnInit } from '@angular/core';

import { ChartData } from '../chardata.model';

import { GoogleChartInterface } from 'ng2-google-charts';
import { Observable } from 'rxjs';
import { Sdg11Service } from '../sdg11.service';



@Component({
  selector: 'app-sgd115',
  templateUrl: './sgd115.component.html',
  styleUrls: ['./sgd115.component.css']
})
export class Sgd115Component implements OnInit {

  query: string;
  title = 'sdg11.5';
  obsSDG: Observable<Object>;
  results: any;

  constructor(public sdg11: Sdg11Service) {
    this.obsSDG = this.sdg11.sdg11_5();
    this.obsSDG.subscribe((data) => { this.results = data; console.log(this.results) });
  }

  ngOnInit(): void {
  }


  public pieChart: GoogleChartInterface = {
  chartType: 'LineChart',
  dataTable: [
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7]
  ],
  //firstRowIsData: true,
  options: {'title': 'Tasks'},
};


}
