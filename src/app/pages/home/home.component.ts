import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe({
      next: (data) => {
        this.events = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des événements :', err);
      }
    });
  }

  viewDetails(event: Event): void {
    // حاليا نفترض أن لدينا معرف eventname فقط، يمكنك تعديل حسب بياناتك
    this.router.navigate(['/event-details', event.eventname]);
  }

  bookEvent(event: Event): void {
    // ننتقل إلى صفحة حجز الحدث
    this.router.navigate(['/book-event', event.eventname]);
  }
}
