import { SliderComponent } from './../slider/slider.component';
import { CommonModule } from '@angular/common';
import { Component, Input, type OnInit } from '@angular/core';
import { PanelTextComponent } from '../panel-text/panel-text.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    CommonModule,
    SliderComponent,
    PanelTextComponent
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent implements OnInit {

  @Input() public element!: { item: { title: string, subtitle: string }, images: { src: string }[] };

  ngOnInit(): void { }

}
