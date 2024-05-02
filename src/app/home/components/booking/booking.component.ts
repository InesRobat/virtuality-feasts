import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { PanelTitleComponent } from 'src/app/shared/panel-title/panel-title.component';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    CommonModule,
    PanelTitleComponent,
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('200ms ease-in', style({ transform: 'translateX(0%)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ])
  ],
})
export class BookingComponent implements OnInit {

  public imageSrc = './assets/images/pexels-photo-4691211.jpg';
  public title = 'Book a table';

  ngOnInit(): void { }

}
