import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ScorecardService {
  constructor(private http: HttpService) {}

  postScorecard(data: object): Observable<any> {
    return this.http.post('http://localhost:6143/scorecards', data);
  }

  getScorecards(): Observable<any> {
    return this.http.get('http://localhost:6143/scorecards');
  }

  getScorecard(id: string): Observable<any> {
    return this.http.get(`http://localhost:6143/scorecards/${id}`);
  }

  deleteScorecard(id: string): Observable<any> {
    return this.http.delete(`http://localhost:6143/scorecards/${id}`);
  }

  patchScorecard(
    id: string,
    data: object,
    parent: string,
    child?: string,
    subchild?: string
  ): Observable<any> {
    if (parent && child && !subchild) {
      return this.http.patch(
        `http://localhost:6143/scorecards?id=${id}&parent=${parent}&child=${child}`,
        data
      );
    }
    if (parent && !child && !subchild) {
      return this.http.patch(
        `http://localhost:6143/scorecards?id=${id}?parent=${parent}`,
        data
      );
    }

    if (parent && child && subchild) {
      return this.http.patch(
        `http://localhost:6143/scorecards?id=${id}&parent=${parent}&child=${child}&subchild=${subchild}`,
        data
      );
    }
  }

  getUserScorecards(uid: string): Observable<any> {
    return this.http.get(`http://localhost:6143/scorecards/users?uid=${uid}`);
  }

  patchScoring(id: string): Observable<any> {
    return this.http.patch(`http://localhost:6143/scoring?id=${id}`, null);
  }
}
