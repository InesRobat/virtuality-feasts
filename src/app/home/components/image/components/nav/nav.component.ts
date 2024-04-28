import { animate } from '@angular/animations';
import { BurgerMenuComponent } from './../../../burger-menu/burger-menu.component';
import { CommonModule } from '@angular/common';
import { Component, Inject, type OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatDialogModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {

  public communicationRef: MatDialogRef<BurgerMenuComponent> | null = null;

  ngOnInit(): void { }

  constructor(
    @Inject(MatDialog) private dialog: MatDialog,
  ) { }

  public openMenu() {
    if (this.communicationRef) {
      return;
    }

    this.communicationRef = this.dialog.open(BurgerMenuComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
    }
    );

    this.communicationRef.afterOpened().subscribe(() => {
      // disable scroll on body
      document.body.style.overflow = 'hidden';
    });

    this.communicationRef.afterClosed().subscribe(() => {
      // enable scroll on body
      document.body.style.overflow = 'auto';
      this.communicationRef = null;
    });
  }

}
