import { CommonModule } from '@angular/common';
import { Component, Input, type OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-text',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './panel-text.component.html',
  styleUrl: './panel-text.component.scss',
})
export class PanelTextComponent implements OnInit {

  @Input() public item!: { title: string, subtitle: string };

  ngOnInit(): void { }

}
