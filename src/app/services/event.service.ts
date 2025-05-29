import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { EventModel } from '../models/event';

@Injectable({ providedIn: 'root' })
export class EventService {
  private apiUrl = 'http://localhost:8086/allEvents';

  constructor(private http: HttpClient) {}

  getAllEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(this.apiUrl);
  }

  getEventById(id: number): Observable<EventModel> {
    return this.http.get<EventModel>(`${this.apiUrl}/${id}`);
  }
}
