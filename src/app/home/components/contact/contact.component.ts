import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { CONTACT_IN_TOUCH_MOCK, CONTACT_OPENING_HOURS_MOCK, CONTACT_PHOTOS_MOCK } from './contact';
import { PanelTitleComponent } from 'src/app/shared/panel-title/panel-title.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    PanelTitleComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('.8s ease-in', style({ transform: 'translateX(0%)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('.8s ease-in', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ])
  ],
})
export class ContactComponent implements OnInit {

  public infos = CONTACT_IN_TOUCH_MOCK;
  public hours = CONTACT_OPENING_HOURS_MOCK;
  public photos = CONTACT_PHOTOS_MOCK;

  public imageSrc = './assets/images/pexels-photo-4694297.jpg';
  public title = 'Contact';

  ngOnInit(): void { }

}
