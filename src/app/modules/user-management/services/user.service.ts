import { Injectable } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpService) {}

  postUser(data: object): Observable<any> {
    return this.http.post(`http://localhost:6143/users`, data);
  }

  getUser(username: string): Observable<any> {
    return this.http.get(`http://localhost:6143/users/${username}`);
  }

  getUsers(): Observable<any> {
    return this.http.get(`http://localhost:6143/users`);
  }

  patchUser(data: object): Observable<any> {
    return this.http.patch(`http://localhost:6143/users`, data);
  }

  deleteUser(username: string): Observable<any> {
    return this.http.delete(`http://localhost:6143/users/${username}`);
  }
}
