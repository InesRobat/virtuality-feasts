import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, DestroyRef, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { timer } from 'rxjs';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderComponent implements AfterViewInit {

  @Input() public images!: { src: string }[];

  @ViewChild('swiper') public swiper!: ElementRef<SwiperContainer>;

  constructor(
    @Inject(DestroyRef) private destroy: DestroyRef,
  ) { }

  public ngAfterViewInit(): void {
    timer(1).pipe(takeUntilDestroyed(this.destroy)).subscribe(() => {
      Object.assign(this.swiper.nativeElement);
      this.swiper.nativeElement.initialize();
    });
  }

}
