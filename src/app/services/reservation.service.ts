import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservatioDto } from '../models/reservation';  // <-- الاستيراد هنا

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = 'http://localhost:8086/allReservations';

  constructor(private http: HttpClient) {}

  createReservation(reservation: ReservatioDto): Observable<any> {
    return this.http.post(this.apiUrl, reservation);
  }

  getAllReservations(): Observable<ReservatioDto[]> {
    return this.http.get<ReservatioDto[]>(this.apiUrl);
  }
}
