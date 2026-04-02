import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { buildWhatsAppUrl } from '../../core/constants/contact';

@Component({
  selector: 'app-transport',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './transport.component.html',
  styleUrl: './transport.component.scss'
})
export class TransportComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {
    const title = 'Taxi & Travel Services | Haridwar to Kedarnath | Kedar Yatra Resort';
    const description = 'Reliable taxi services for Char Dham Yatra. Pickup from Haridwar, Rishikesh, and Dehradun (Airport) directly to Masta and Kedarnath. Safe mountain-trained drivers.';
    const image = 'https://kedar-yr-gvc4.vercel.app/image/transport.png';

    this.title.setTitle(title);

    this.meta.updateTag({ name: 'description', content: description });

    // Open Graph (WhatsApp, Facebook)
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:url', content: 'https://kedar-yr-gvc4.vercel.app/travel' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
  }

  services = [
    {
      title: 'Haridwar / Rishikesh Pickup',
      desc: 'Direct pickup from Haridwar Railway Station or Rishikesh Bus Stand to Kedar Yatra Resort.',
      price: 'Starting from ₹4,500'
    },
    {
      title: 'Dehradun Airport (DED) Pickup',
      desc: 'Personalized airport transfer from Jolly Grant (DED) directly to Masta Helidrome route.',
      price: 'Starting from ₹5,500'
    },
    {
      title: 'Char Dham Full Tour',
      desc: 'Complete taxi package for Yamunotri, Gangotri, Kedarnath, and Badrinath. All inclusive.',
      price: 'Contact for Best Price'
    },
    {
      title: 'Local Sightseeing',
      desc: 'Explore Chopta, Tungnath, and Triyuginarayan Temple with our expert local drivers.',
      price: '₹2,500 / Day'
    }
  ];

  getWhatsAppLink(subject: string): string {
    const msg = `Hi! I am interested in your Taxi/Travel service: ${subject}. Please share more details and availability.`;
    return buildWhatsAppUrl(msg);
  }
}
