import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sdg11Service } from '../sdg11.service';

import { ChartData } from '../chardata.model';

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
  constructor(public sdg11: Sdg11Service) {

  }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsSDG = this.sdg11.sdg11_1(this.query);
    this.obsSDG.subscribe((data) => { this.results = data; console.log(this.results) });
  }




}
