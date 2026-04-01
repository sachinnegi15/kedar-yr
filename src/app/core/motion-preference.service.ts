import { Injectable, PLATFORM_ID, inject, signal, DestroyRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { afterNextRender } from '@angular/core';

/**
 * Tracks OS/browser "prefers-reduced-motion" for safer, calmer transitions
 * (route changes, scroll reveals, smooth scroll).
 */
@Injectable({ providedIn: 'root' })
export class MotionPreferenceService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  readonly prefersReducedMotion = signal(false);

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      const sync = () => this.prefersReducedMotion.set(mq.matches);
      sync();
      mq.addEventListener('change', sync);
      this.destroyRef.onDestroy(() => mq.removeEventListener('change', sync));
    });
  }

  scrollBehavior(): ScrollBehavior {
    return this.prefersReducedMotion() ? 'auto' : 'smooth';
  }

  /** Route fade duration for Angular animation param (e.g. `'300ms'` / `'1ms'`). */
  routeFadeDuration(): string {
    return this.prefersReducedMotion() ? '1ms' : '300ms';
  }

  /** Navbar mobile menu panel (ms). */
  menuEnterDurationMs(): number {
    return this.prefersReducedMotion() ? 1 : 300;
  }

  menuLeaveDurationMs(): number {
    return this.prefersReducedMotion() ? 1 : 250;
  }
}
