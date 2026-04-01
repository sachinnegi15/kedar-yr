import { Component, HostListener, inject, OnDestroy } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { trigger, style, transition, animate } from '@angular/animations';
import { MotionPreferenceService } from '../../core/motion-preference.service';
import { buildWhatsAppUrl } from '../../core/constants/contact';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('menuAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0, overflow: 'hidden' }),
        animate(
          '{{enterMs}}ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ height: '*', opacity: 1 }),
        ),
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1, overflow: 'hidden' }),
        animate(
          '{{leaveMs}}ms cubic-bezier(0.4, 0, 1, 1)',
          style({ height: 0, opacity: 0 }),
        ),
      ]),
    ]),
  ],
})
export class NavbarComponent implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly motion = inject(MotionPreferenceService);

  readonly whatsappBookingUrl = buildWhatsAppUrl(
    'Hi, I would like to inquire about a booking at Kedar Yatra Resort.',
  );

  isMobileMenuOpen = false;
  isScrolled = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = this.document.defaultView?.scrollY ? this.document.defaultView.scrollY > 8 : false;
  }

  ngOnDestroy(): void {
    this.document.body.style.overflow = '';
  }

  toggleMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  }

  /** Params for mobile panel open/close (1ms when prefers-reduced-motion). */
  getMenuAnimParams(): {
    value: string;
    params: { enterMs: number; leaveMs: number };
  } {
    return {
      value: 'panel',
      params: {
        enterMs: this.motion.menuEnterDurationMs(),
        leaveMs: this.motion.menuLeaveDurationMs(),
      },
    };
  }
}
