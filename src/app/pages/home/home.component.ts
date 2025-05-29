import { Component, OnInit } from '@angular/core';
import { EventModel } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  events: EventModel[] = [];

  // تصحيح: يجب وضع الخصائص في constructor فقط
  constructor(
    private eventService: EventService,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((data) => {
      this.events = data;
    });
  }

  reserver(eventId: number): void {
    const clientId = 1; // مؤقتاً فقط، استبدل بالعميل الحقيقي بعد الربط مع Login

    const reservation = {
      idReservation: 0,
      clientid: clientId,
      eventId: eventId,
    };

    this.reservationService.createReservation(reservation).subscribe({
      next: () => alert('Réservation effectuée avec succès!'),
      error: () => alert('Erreur lors de la réservation.'),
    });
  }
}
