import { CommonModule } from '@angular/common';
import { Component, Input, type OnInit } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
  ],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent implements OnInit {

  @Input() public src!: string;
  @Input() public title!: string;

  public ngOnInit(): void {
    if (localStorage.getItem('imageSrc')) {
      this.src = localStorage.getItem('imageSrc') || this.src;
    }

    if (localStorage.getItem('title')) {
      this.title = localStorage.getItem('title') || this.title;
    }
  }

}
