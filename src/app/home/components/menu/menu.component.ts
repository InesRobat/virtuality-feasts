import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, QueryList, ViewChildren } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ScrollToItemDirective } from 'src/app/directives/scroll-to-item.directive';
import { MENU_MOCK } from './menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    ScrollToItemDirective,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {

  @Input() public scrollPosition$!: BehaviorSubject<number>;
  @Input() public routerRef!: HTMLDivElement;

  @ViewChildren(ScrollToItemDirective) public itemCards!: QueryList<ScrollToItemDirective>;

  public legend = ['Appetizers', 'Main Course', 'Sides & Extras', 'Desserts', 'Beverages', 'Kids\' Menu', 'Chef\'s Specials'];

  public menu = MENU_MOCK;
  public imageSrc = './assets/images/pexels-photo-3298637.jpg';
  public title = 'Menu';

  constructor() { }

  public goTo(index: number): void {
    this.itemCards.find((item) => item.value === index)!.scrollIntoView();
  }

  public scrollBack(): void {
    if (this.scrollPosition$.value === 0) {
      this.routerRef.scrollTo({ top: this.routerRef.scrollHeight, behavior: 'smooth' });
    } else {
      this.routerRef.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

}
