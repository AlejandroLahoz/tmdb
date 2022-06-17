import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<ReturnType>(endpoint: string): Observable<ReturnType> {
    return this.http.get<ReturnType>(`${environment.api}${endpoint}`);
  }
}
