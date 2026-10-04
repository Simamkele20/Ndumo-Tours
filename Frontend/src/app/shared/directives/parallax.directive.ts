import { Directive, ElementRef, Input, OnInit, OnDestroy, HostListener } from '@angular/core';

/**
 * ParallaxDirective
 * Creates parallax effect on background image during scroll
 * Usage: <div appParallax [speed]="0.5" style="background-image: url(...)">Content</div>
 * speed: 0-1 (lower = more parallax effect)
 */
@Directive({
  selector: '[appParallax]',
  standalone: true
})
export class ParallaxDirective implements OnInit, OnDestroy {
  @Input() speed: number = 0.5;

  private scrollListener: any = null;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.scrollListener = this.onScroll.bind(this);
    window.addEventListener('scroll', this.scrollListener, true);
  }

  ngOnDestroy(): void {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener, true);
    }
  }

  private onScroll(): void {
    const element = this.el.nativeElement;
    const scrollPosition = window.pageYOffset;
    const elementOffset = element.offsetTop;

    if (scrollPosition + window.innerHeight > elementOffset) {
      const yOffset = (scrollPosition - elementOffset) * this.speed;
      element.style.backgroundPosition = `center ${yOffset}px`;
    }
  }
}
