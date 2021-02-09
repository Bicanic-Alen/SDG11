import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sdg11Service } from '../sdg11.service';
import {Location} from '@angular/common'
import { ChartData } from '../chardata.model';
import { ActivatedRoute } from '@angular/router';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-sgd111',
  templateUrl: './sgd111.component.html',
  styleUrls: ['./sgd111.component.css']
})
export class Sgd111Component {
  query: string;
  title = 'sdg11.1';
  obsSDG: Observable<Object>;
  results: any;
  dati = [];

  constructor(public sdg11: Sdg11Service,
              private route: ActivatedRoute,
              private location: Location) {}

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsSDG = this.sdg11.sdg11_1(this.query);
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
