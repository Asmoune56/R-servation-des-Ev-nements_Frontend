import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { ReservatioDto } from 'src/app/models/reservation';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html'
})
export class ReservationsComponent implements OnInit {
  reservations: ReservatioDto[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservationService.getAllReservations().subscribe(
      (data: ReservatioDto[]) => {
        this.reservations = data;
      },
      (error: any) => {
        console.error('Erreur lors du chargement des réservations', error);
      }
    );
  }
}
