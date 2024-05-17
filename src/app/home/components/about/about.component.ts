import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { ItemComponent } from './components/item/item.component';
import { StatsComponent } from './components/stats/stats.component';
import { BOTTOM_ITEM, TOP_ITEM } from './items';
import { STATS } from './stats';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    ItemComponent,
    StatsComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
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
export class AboutComponent implements OnInit {

  public imageSrc = './assets/images/pexels-photo-4577715.jpg';
  public title = 'About';
  public statsArray = STATS;
  public topItem = TOP_ITEM;
  public bottomItem = BOTTOM_ITEM;

  ngOnInit(): void { }

}
