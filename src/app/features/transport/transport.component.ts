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
    this.title.setTitle('Taxi & Travel Services | Haridwar to Kedarnath | Kedar Yatra Resort');
    this.meta.updateTag({ name: 'description', content: 'Reliable taxi services for Char Dham Yatra. Pickup from Haridwar, Rishikesh, and Dehradun (Airport) directly to Phata and Kedarnath. Safe mountain-trained drivers.' });
  }

  services = [
    {
      title: 'Haridwar / Rishikesh Pickup',
      desc: 'Direct pickup from Haridwar Railway Station or Rishikesh Bus Stand to Kedar Yatra Resort.',
      price: 'Starting from ₹4,500'
    },
    {
      title: 'Dehradun Airport (DED) Pickup',
      desc: 'Personalized airport transfer from Jolly Grant (DED) directly to Phata Helidrome route.',
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
