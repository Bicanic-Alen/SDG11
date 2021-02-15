import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Sdg11Service {

  constructor(private http: HttpClient) { }
  sdg11_1(query: string) {
    const url = `https://3001-blush-clam-dezwbe4e.ws-eu03.gitpod.io/sdg/sdg11.1/${query}`;
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }
  sdg11_5(query: string) {
    const url = `https://3001-blush-clam-dezwbe4e.ws-eu03.gitpod.io/sdg/sdg11.5/${query}`;
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }
  sdg11_6(query: string) {
    const url = `https://3001-blush-clam-dezwbe4e.ws-eu03.gitpod.io/sdg/sdg11.6/${query}`;
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }
  sdg11_b(query: string) {
    const url = `https://3001-blush-clam-dezwbe4e.ws-eu03.gitpod.io/sdg/sdg11.b/${query}`;
    const headers = new HttpHeaders("");
    return this.http.get(url, { headers });
  }




}
