import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Sdg11Service {

  constructor(private http: HttpClient) { }
  sdg11_1(query: string) {
    const url = `https://3001-red-guanaco-sdr3amri.ws-eu03.gitpod.io/SDG/sdg11.1/${query}`;
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }
  sdg11_5() {
    const url = 'https://3001-red-guanaco-sdr3amri.ws-eu03.gitpod.io/SDG/sdg11.5';
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }
  sdg11_6() {
    const url = 'https://3001-red-guanaco-sdr3amri.ws-eu03.gitpod.io/SDG/sdg11.6';
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }
  sdg11_b() {
    const url = 'https://3001-red-guanaco-sdr3amri.ws-eu03.gitpod.io/SDG/sdg11.b';
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }




}
