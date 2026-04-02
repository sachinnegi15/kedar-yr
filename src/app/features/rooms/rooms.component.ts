import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { buildWhatsAppUrl } from '../../core/constants/contact';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {
    const pageTitle = 'Rooms & Suites | Kedar Yatra Resort';
    const description = 'Choose from our range of Deluxe, Super Deluxe, and Family rooms. All rooms feature breathtaking Himalayan views and modern amenities for your yatra stay.';
    const image = 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200';

    this.title.setTitle(pageTitle);

    this.meta.updateTag({ name: 'description', content: description });

    // Open Graph (for WhatsApp, Facebook etc.)
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:url', content: 'https://kedar-yr-gvc4.vercel.app/rooms' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter (optional but good)
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
  }

  rooms = [
    {
      id: 'deluxe',
      name: 'Deluxe Mountain View',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop',
      price: '2,499',
      description: 'Our Deluxe rooms offer a cozy and comfortable stay with large windows overlooking the majestic Himalayan valleys.',
      features: ['Queen Size Bed', 'Mountain View', 'LED TV', 'Hot Water', 'WiFi'],
      maxGuests: '2 Adults'
    },
    {
      id: 'super-deluxe',
      name: 'Super Deluxe Balcony Suite',
      image: 'https://plus.unsplash.com/premium_photo-1670076505419-99468d952c61?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '3,999',
      description: 'Experience luxury with our spacious Super Deluxe suites featuring a private balcony and premium bedding.',
      features: ['King Size Bed', 'Private Balcony', 'Teak Wood Furniture', '24/7 Room Service', 'Heater'],
      maxGuests: '2 Adults + 1 Child'
    },
    {
      id: 'family',
      name: 'Himalayan Family Suite',
      image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop',
      price: '4,999',
      description: 'Ideal for groups and families, this large suite features multiple beds and a shared lounge area.',
      features: ['1 King + 2 Single Beds', 'Large Windows', 'Two Bathrooms', 'Sitting Area', 'Complimentary Breakfast'],
      maxGuests: '4-6 Adults'
    }
  ];

  getWhatsAppLink(roomName: string): string {
    const msg = `Hi! I'm interested in booking the ${roomName} at Kedar Yatra Resort. Please share availability.`;
    return buildWhatsAppUrl(msg);
  }
}
