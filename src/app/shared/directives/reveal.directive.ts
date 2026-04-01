import { Directive, ElementRef, inject, afterNextRender } from '@angular/core';
import { MotionPreferenceService } from '../../core/motion-preference.service';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective {
  private el = inject(ElementRef);
  private motion = inject(MotionPreferenceService);

  constructor() {
    afterNextRender(() => {
      const el = this.el.nativeElement as HTMLElement;

      el.classList.add('reveal-base');

      if (this.motion.prefersReducedMotion()) {
        el.classList.add('reveal-visible');
        return;
      }

      const rect = el.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('reveal-visible');
        return;
      }

      el.classList.add('reveal-hidden');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.remove('reveal-hidden');
              el.classList.add('reveal-visible');
              observer.unobserve(el);
            }
          });
        },
        {
          threshold: 0.01,
          rootMargin: '0px 0px 150px 0px',
        },
      );

      observer.observe(el);
    });
  }
}
