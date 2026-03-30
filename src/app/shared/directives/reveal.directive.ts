import { Directive, ElementRef, inject, afterNextRender } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective {
  private el = inject(ElementRef);

  constructor() {
    afterNextRender(() => {
      const el = this.el.nativeElement as HTMLElement;
      
      // Add the base transition property
      el.classList.add('reveal-base');

      const rect = el.getBoundingClientRect();
      
      // If it's already on screen, reveal it instantly
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('reveal-visible');
        return;
      }

      // Otherwise, start hidden
      el.classList.add('reveal-hidden');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.remove('reveal-hidden');
            el.classList.add('reveal-visible');
            observer.unobserve(el);
          }
        });
      }, {
        threshold: 0.01,
        rootMargin: '0px 0px 50px 0px' 
      });

      observer.observe(el);
    });
  }
}
