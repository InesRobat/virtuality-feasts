import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { menuList, navList } from '../list/list.component';
import { BURGER_MENU } from './burger-menu';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
})
export class BurgerMenuComponent {

  public burgerMenuLit = BURGER_MENU;

  constructor(
    @Inject(MatDialogRef) private dialogRef: MatDialogRef<BurgerMenuComponent>,
    @Inject(Router) private router: Router,
  ) { }

  public onBurgerMenuItemClick(item: string) {
    switch (item) {
      case menuList.MENU:
        this.router.navigate([navList.MENU]);
        break;
      case menuList.RESERVATION:
        this.router.navigate([navList.RESERVATION]);
        break;
      case menuList.OUR_RESTAURANT:
        this.router.navigate([navList.OUR_RESTAURANT]);
        break;
      case menuList.CONTACT:
        this.router.navigate([navList.CONTACT]);
        break;
      case menuList.ABOUT:
        this.router.navigate([navList.OUR_RESTAURANT]);
        break;
    }

    this.close();
  }

  public close() {
    this.dialogRef.close();
  }

}
