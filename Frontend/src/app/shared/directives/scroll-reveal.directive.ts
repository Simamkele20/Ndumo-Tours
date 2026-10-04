import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

/**
 * ScrollRevealDirective
 * Triggers fade-in animation when element scrolls into viewport
 * Usage: <div appScrollReveal [delay]="0.2">Content</div>
 */
@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() delay: number = 0; // Delay in seconds
  @Input() duration: number = 0.8; // Animation duration in seconds

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
          this.animateElement();
          if (this.observer) {
            this.observer.unobserve(this.el.nativeElement);
          }
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  private animateElement(): void {
    const element = this.el.nativeElement;
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';

    setTimeout(() => {
      element.style.transition = `opacity ${this.duration}s ease-out, transform ${this.duration}s ease-out`;
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, this.delay * 1000);
  }
}
