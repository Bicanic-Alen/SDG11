  import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }
  sgd11_1(query: string) {
    const url = 'https://3001-a236dedb-5249-46d8-b60a-3e98b021dde5.ws-eu03.gitpod.io/SDG/sdg11.1';
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }
  sgd11_5(query: string) {
    const url = 'https://3001-a236dedb-5249-46d8-b60a-3e98b021dde5.ws-eu03.gitpod.io/SDG/sdg11.5';
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }
  sgd11_6(query: string) {
    const url = 'https://3001-a236dedb-5249-46d8-b60a-3e98b021dde5.ws-eu03.gitpod.io/SDG/sdg11.6';
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }
  sgd11_b(query: string) {
    const url = 'https://3001-a236dedb-5249-46d8-b60a-3e98b021dde5.ws-eu03.gitpod.io/SDG/sdg11.b';
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }




}
