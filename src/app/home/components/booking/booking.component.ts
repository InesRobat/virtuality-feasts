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
})
export class BookingComponent implements OnInit {

  public imageSrc = './assets/images/pexels-photo-4691211.jpg';
  public title = 'Book a table';

  ngOnInit(): void { }

}
