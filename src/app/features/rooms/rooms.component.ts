import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { RevealDirective } from '../../shared/directives/reveal.directive';

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
    this.title.setTitle('Rooms & Suites | Kedar Yatra Resort');
    this.meta.updateTag({ name: 'description', content: 'Choose from our range of Deluxe, Super Deluxe, and Family rooms. All rooms feature breathtaking Himalayan views and modern amenities for your yatra stay.' });
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
      image: 'https://images.unsplash.com/photo-1591088398332-8596b4d9b63d?q=80&w=1200&auto=format&fit=crop',
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
    return `https://wa.me/917467840098?text=${encodeURIComponent(msg)}`;
  }
}
