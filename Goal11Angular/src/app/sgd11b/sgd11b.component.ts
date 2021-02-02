import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sdg11Service } from '../sdg11.service';

@Component({
  selector: 'app-sgd11b',
  templateUrl: './sgd11b.component.html',
  styleUrls: ['./sgd11b.component.css']
})
export class Sgd11bComponent implements OnInit {

  query: string;
  title = 'sdg11.b';
  obsSDG: Observable<Object>;
  results: any;

  constructor(public sdg11: Sdg11Service) {
    this.obsSDG = this.sdg11.sdg11_b();
    this.obsSDG.subscribe((data) => { this.results = data; console.log(this.results) });
  }


  ngOnInit(): void {
  }

}
