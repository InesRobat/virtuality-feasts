import { CommonModule } from '@angular/common';
import { Component, HostBinding, Inject, type OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LIST } from './list';

export enum menuList {
  MENU = 'Menu',
  RESERVATION = 'Reservation',
  OUR_RESTAURANT = 'Our restaurant',
  CONTACT = 'Contact',
  BLOG = 'Blog',
  ABOUT = 'About',
}

export enum navList {
  MENU = 'menu',
  RESERVATION = 'reservation',
  OUR_RESTAURANT = 'about',
  CONTACT = 'contact',
  BLOG = 'blog',
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {

  public array = LIST;
  public state = 'list';

  constructor(
    @Inject(Router) private router: Router,
  ) { }

  ngOnInit(): void { }

  public goTo(title: string) {
    switch (title) {
      case menuList.MENU:
        this.router.navigate([navList.MENU]);
        break;
      case menuList.RESERVATION:
        this.router.navigate([navList.RESERVATION]);
        break;
      case menuList.OUR_RESTAURANT:
        this.router.navigate([navList.OUR_RESTAURANT]);
        break;
    }
  }

}
