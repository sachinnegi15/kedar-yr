import { Component, inject, signal, HostListener, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet, ChildrenOutletContexts } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { fadeRouteAnimation } from './core/animations/route-animations';
import { MotionPreferenceService } from './core/motion-preference.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [fadeRouteAnimation],
})
export class AppComponent {
  private contexts = inject(ChildrenOutletContexts);
  private platformId = inject(PLATFORM_ID);
  private motion = inject(MotionPreferenceService);

  showScrollTop = signal(false);

  @HostListener('window:scroll')
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.showScrollTop.set(window.scrollY > 400);
    }
  }

  scrollToTop() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    window.scrollTo({ top: 0, behavior: this.motion.scrollBehavior() });
  }

  /** Route animation state + duration param (honours prefers-reduced-motion). */
  getRouteAnimationBinding(): {
    value: string | undefined;
    params: { duration: string };
  } {
    const value = this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    return {
      value,
      params: { duration: this.motion.routeFadeDuration() },
    };
  }
}
