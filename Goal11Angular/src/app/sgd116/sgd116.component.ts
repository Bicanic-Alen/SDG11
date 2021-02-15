import { Component, OnInit } from '@angular/core';
import { Sdg11Service } from '../sdg11.service';
import { Observable } from 'rxjs';
import {Location} from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-sgd116',
  templateUrl: './sgd116.component.html',
  styleUrls: ['./sgd116.component.css']
})
export class Sgd116Component {
  query: string;
  title = 'sdg11.6';
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
    this.obsSDG = this.sdg11.sdg11_6(this.query);
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
