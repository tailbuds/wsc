import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScoreDictionaryService {
  constructor(private http: HttpService) {}

  getScoreDictionary(): Observable<any> {
    return this.http.get('http://localhost:6143/scoredictionary');
  }

  postScoreDictionary(data: object): Observable<any> {
    return this.http.post('http://localhost:6143/scoredictionary', data);
  }

  updateScoreDictionary(update: string, data: object): Observable<any> {
    if (update === 'facilityScores' || update === 'obligorScores') {
      return this.http.put(
        `http://localhost:6143/scoredictionary?update=${update}`,
        data
      );
    }
  }
}
