import { Component, OnInit } from '@angular/core';
import { Sdg11Service } from '../sdg11.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sgd116',
  templateUrl: './sgd116.component.html',
  styleUrls: ['./sgd116.component.css']
})
export class Sgd116Component implements OnInit {

  query: string;
  title = 'sdg11.6';
  obsSDG: Observable<Object>;
  results: any;

  constructor(public sdg11: Sdg11Service) {
    this.obsSDG = this.sdg11.sdg11_6();
    this.obsSDG.subscribe((data) => { this.results = data; console.log(this.results) });
  }


  ngOnInit(): void {
  }

}
