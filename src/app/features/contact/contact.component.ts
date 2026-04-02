import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import {
  RESORT_PHONE_DISPLAY,
  RESORT_PHONE_TEL_HREF,
  RESORT_WHATSAPP_E164,
  buildWhatsAppUrl,
} from '../../core/constants/contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {
    const title = 'Contact Us | Kedar Yatra Resort | Sonprayag - Gaurikund';
    const description = 'Get directions and contact details for Kedar Yatra Resort. Reach out on WhatsApp for instant booking and travel assistance for your Kedarnath journey.';
    const image = 'https://kedar-yr-gvc4.vercel.app/image/contact.png';

    this.title.setTitle(title);

    this.meta.updateTag({ name: 'description', content: description });

    // Open Graph (WhatsApp, Facebook)
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:url', content: 'https://kedar-yr-gvc4.vercel.app/contact' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
  }

  contactInfo = {
    phone: RESORT_PHONE_DISPLAY,
    telHref: RESORT_PHONE_TEL_HREF,
    email: 'info@kedaryatraresort.com',
    address: 'Opp. Aryan Aviation Helipad, Masta, Narayankoti, Guptkashi, Uttarakhand, India, 246471',
    whatsapp: RESORT_WHATSAPP_E164,
  };

  getWhatsAppLink(subject: string): string {
    const msg = `Hi! I'm reaching out regarding: ${subject}`;
    return buildWhatsAppUrl(msg);
  }
}
