import { Component, OnInit } from '@angular/core';

import { ChartData } from '../chardata.model';
import {Location} from '@angular/common'
import { GoogleChartInterface } from 'ng2-google-charts';
import { Observable } from 'rxjs';
import { Sdg11Service } from '../sdg11.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-sgd115',
  templateUrl: './sgd115.component.html',
  styleUrls: ['./sgd115.component.css']
})
export class Sgd115Component {
  query: string;
  title = 'sdg11.5';
  obsSDG: Observable<Object>;
  results: any;
  dati = [];

  constructor(public sdg15: Sdg11Service,
              private route: ActivatedRoute,
              private location: Location) {}

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsSDG = this.sdg15.sdg11_5(this.query);
    this.obsSDG.subscribe(this.getData);
  }


  getData = (data) => {
    console.log(data);
    this.dati.push(['TimePeriod', 'Value']);
    for (var i of data)
    {
      this.dati.push([i['TimePeriod'], i['Value']]);
    }
    console.log(this.dati);
    this.LineChart.dataTable = this.dati;
  }



  public LineChart: GoogleChartInterface = {
  chartType: 'ColumnChart',
  dataTable: undefined,
  //firstRowIsData: true,
  options: {'TimePeriod': 'Value'},
};



}
