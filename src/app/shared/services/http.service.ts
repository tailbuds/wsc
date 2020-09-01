import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  post(apiUrl: string, data: any) {
    const headers = new HttpHeaders('Content-Type: application/json');
    const options = { headers: headers, withCredentials: false };

    const url = apiUrl;

    return this.http.post(url, JSON.stringify(data), options);
  }

  get(apiUrl: string) {
    const headers = new HttpHeaders();
    const options = { headers: headers, withCredentials: false };

    const url = apiUrl;

    return this.http.get(url, options);
  }

  patch(apiUrl: string, data: any) {
    const headers = new HttpHeaders('Content-Type: application/json');
    const options = { headers: headers, withCredentials: false };

    const url = apiUrl;

    return this.http.patch(url, JSON.stringify(data), options);
  }

  delete(apiUrl: string) {
    const headers = new HttpHeaders();
    const options = { headers: headers, withCredentials: false };

    const url = apiUrl;

    return this.http.delete(url, options);
  }
}
