import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, DestroyRef, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { BehaviorSubject, filter, timer } from 'rxjs';
import { FooterComponent } from './components/footer/footer.component';
import { ImageComponent } from './components/image/image.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ImageComponent,
    RouterOutlet,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {

  @ViewChild('router') public routerRef!: ElementRef<HTMLDivElement>;

  private scrollPosition$ = new BehaviorSubject<number>(0);

  public src = './assets/images/pexels-photo-5490965.jpg';
  public title = 'Feast sensation';
  public state = 'home';

  constructor(
    @Inject(Router) private router: Router,
    @Inject(DestroyRef) private destroy: DestroyRef,
    @Inject(ChangeDetectorRef) private cdr: ChangeDetectorRef,
  ) {
    this.router.events.pipe(
      takeUntilDestroyed(this.destroy),
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      if (event.url === '/') {
        const src = './assets/images/pexels-photo-5490965.jpg';
        const title = 'Feast sensation';
        localStorage.setItem('imageSrc', src);
        localStorage.setItem('title', title);
        this.src = src;
        this.title = title;
        // this.cdr.detectChanges();
      }
    })
  }

  public ngOnInit(): void { }

  public onOutletLoaded(component: any): void {
    timer(1000).subscribe(() => {
      component.routerRef = this.routerRef.nativeElement;
    });

    if (component.imageSrc && component.title) {
      this.src = component.imageSrc;
      this.title = component.title;

      localStorage.setItem('imageSrc', component.imageSrc);
      localStorage.setItem('title', component.title);
    }

    if (component.state) {
      this.state = component.state;
    } else {
      this.state = 'home';
    }

    component.scrollPosition$ = this.scrollPosition$;

    this.cdr.detectChanges();
  }

  public onScroll(e: any): void {
    this.scrollPosition$.next(e.target?.scrollTop);
  }
}
