import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DocumentsService {
  constructor(private http: HttpService) {}
  patchDocument(id: string, update: string, data: FormData): Observable<any> {
    return this.http.patch(
      `http://localhost:6143/uploads/${id}?doc=${update}`,
      data
    );
  }
}
