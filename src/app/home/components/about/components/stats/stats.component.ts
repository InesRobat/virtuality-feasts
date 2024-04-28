import { CommonModule } from '@angular/common';
import { Component, Input, type OnInit } from '@angular/core';
import { STATS } from '../../stats';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent implements OnInit {

  @Input() public element!: { title: string, subtitle: string };

  public starArray = new Array(5);

  ngOnInit(): void { }

}
