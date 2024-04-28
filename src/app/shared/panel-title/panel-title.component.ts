import { CommonModule } from '@angular/common';
import { Component, Input, type OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-title',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './panel-title.component.html',
  styleUrl: './panel-title.component.scss',
})
export class PanelTitleComponent implements OnInit {

  @Input() public title!: string;

  ngOnInit(): void { }

}
