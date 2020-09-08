import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ScaleService {
  constructor(private http: HttpService) {}

  getScale(): Observable<any> {
    return this.http.get('http://localhost:6143/scale');
  }

  postScale(data: object): Observable<any> {
    return this.http.post('http://localhost:6143/scale', data);
  }

  updateScale(update: string, data: object): Observable<any> {
    if (update === 'frrScale' || update === 'frrScale') {
      return this.http.put(
        `http://localhost:6143/scale?&update=${update}`,
        data
      );
    }
  }
}
