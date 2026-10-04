import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

/**
 * StaggerDirective
 * Applies staggered fade-in animation to child elements
 * Usage: <div appStagger [staggerDelay]="0.1">
 *          <div>Item 1</div>
 *          <div>Item 2</div>
 *        </div>
 */
@Directive({
  selector: '[appStagger]',
  standalone: true
})
export class StaggerDirective implements OnInit, OnDestroy {
  @Input() staggerDelay: number = 0.1; // Delay between each child in seconds
  @Input() startDelay: number = 0; // Delay before first animation starts
  @Input() duration: number = 0.8; // Duration of each animation

  private observer: IntersectionObserver | null = null;
  private hasAnimated = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver(): void {
    const options: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animateChildren();
          if (this.observer) {
            this.observer.unobserve(this.el.nativeElement);
          }
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  private animateChildren(): void {
    const children = Array.from(this.el.nativeElement.children) as HTMLElement[];

    children.forEach((child, index) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(30px)';

      const delay = this.startDelay + index * this.staggerDelay;
      setTimeout(() => {
        child.style.transition = `opacity ${this.duration}s ease-out, transform ${this.duration}s ease-out`;
        child.style.opacity = '1';
        child.style.transform = 'translateY(0)';
      }, delay * 1000);
    });
  }
}
