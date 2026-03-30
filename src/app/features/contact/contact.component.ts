import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { revealAnimation } from '../../core/animations/reveal-animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [revealAnimation]
})
export class ContactComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {
    this.title.setTitle('Contact Us | Kedar Yatra Resort | Sonprayag - Gaurikund');
    this.meta.updateTag({ name: 'description', content: 'Get directions and contact details for Kedar Yatra Resort. Reach out on WhatsApp for instant booking and travel assistance for your Kedarnath journey.' });
  }

  contactInfo = {
    phone: '+91 74678 40098',
    email: 'info@kedaryatraresort.com',
    address: 'Kedarnath Highway, Sonprayag-Gaurikund Route, Uttarakhand 246471',
    whatsapp: '917467840098'
  };

  getWhatsAppLink(subject: string): string {
    const msg = `Hi! I'm reaching out regarding: ${subject}`;
    return `https://wa.me/${this.contactInfo.whatsapp}?text=${encodeURIComponent(msg)}`;
  }
}
