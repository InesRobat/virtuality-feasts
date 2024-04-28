import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent implements OnInit {

  public imageSrc = 'https://via.placeholder.com/150';
  public title = 'Blog';

  ngOnInit(): void { }

}
