import { Component, OnDestroy, signal, afterNextRender, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy {
  private title = inject(Title);
  private meta = inject(Meta);

  currentSlide = signal(0);
  private autoPlayInterval: any;

  slides = [
    {
      image: 'https://images.unsplash.com/photo-1722619793183-3787ca05d61f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0',
      title: 'Gateway to the Divine',
      subtitle: 'Begin your sacred Kedarnath yatra from our serene retreat — where Himalayan peaks meet spiritual peace.',
      cta: 'Book Your Stay'
    },
    {
      image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1974&auto=format&fit=crop',
      title: 'Where Mountains Embrace You',
      subtitle: 'Luxury stays nestled in the heart of the Garhwal Himalayas with breathtaking valley views.',
      cta: 'Explore Rooms'
    }
  ];

  testimonials = [
    {
      name: 'Aditya Sharma',
      location: 'Delhi',
      text: 'An absolutely divine experience! The resort is perfectly located for the Kedarnath yatra. Comfortable rooms, warm staff, and the mountain views are breathtaking.',
      rating: 5,
      avatar: 'AS'
    },
    {
      name: 'Priya Patel',
      location: 'Mumbai',
      text: 'We stayed here on our way back from Kedarnath. After a tiring trek, the resort felt like heaven. The food was delicious and the staff was so warm and helpful.',
      rating: 5,
      avatar: 'PP'
    },
    {
      name: 'Rahul Mehta',
      location: 'Pune',
      text: 'Perfect base camp for the Kedarnath trek. Clean rooms, great amenities, and the location is fantastic. Will definitely return on our next yatra.',
      rating: 5,
      avatar: 'RM'
    }
  ];

  amenities = [
    { icon: '🏔️', title: 'Mountain Views', desc: 'Wake up to breathtaking panoramic views of the Himalayan peaks right from your window.' },
    { icon: '🍽️', title: 'Pure Veg Kitchen', desc: 'Authentic Garhwali cuisine and wholesome sattvic meals to fuel your yatra.' },
    { icon: '🚿', title: 'Hot Water 24/7', desc: 'Consistent hot water supply — essential after long, cold treks in the mountains.' },
    { icon: '🅿️', title: 'Free Parking', desc: 'Secure and spacious parking for cars and buses, with easy highway access.' },
    { icon: '🛕', title: 'Yatra Assistance', desc: 'Our team helps with route planning, pony/doli bookings, and puja arrangements.' },
    { icon: '📶', title: 'WiFi Available', desc: 'Stay connected with complimentary WiFi throughout the property.' }
  ];

  rooms = [
    {
      name: 'Deluxe Room',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop',
      price: '2,499',
      features: ['2 Adults', 'Mountain View', 'Hot Water', 'Free WiFi'],
      whatsappMsg: 'Hi! I want to book a Deluxe Room at Kedar Yatra Resort.'
    },
    {
      name: 'Super Deluxe Suite',
      image: 'https://images.unsplash.com/photo-1591088398332-8596b4d9b63d?q=80&w=800&auto=format&fit=crop',
      price: '₹3,999',
      features: ['2-4 Adults', 'Valley View', 'Balcony', 'Heater Included'],
      whatsappMsg: 'Hi! I want to book a Super Deluxe Suite at Kedar Yatra Resort.'
    },
    {
      name: 'Family Room',
      image: 'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?q=80&w=800&auto=format&fit=crop',
      price: '₹4,999',
      features: ['Up to 6 Adults', 'Spacious Hall', 'Twin + Double Beds', '2 Bathrooms'],
      whatsappMsg: 'Hi! I want to book a Family Room at Kedar Yatra Resort.'
    }
  ];

  yatraRoute = [
    {
      name: 'Phata (Resort)',
      distance: 'Start',
      time: '0 min',
      icon: '🚁',
      tip: 'Helicopter service starts right next to our hotel! Reach Kedarnath in 8 minutes.',
      isResort: true
    },
    {
      name: 'Sonprayag',
      distance: '18 km',
      time: '45 min',
      icon: '🏘️',
      tip: 'Major hub where private vehicles stop. Shuttle service to Gaurikund starts here.'
    },
    {
      name: 'Gaurikund',
      distance: '23 km',
      time: '1 hr',
      icon: '♨️',
      tip: 'The base for the 16km trek. Famous for its natural hot water spring and Gauri Devi temple.'
    },
    {
      name: 'Kedarnath Temple',
      distance: '39 km',
      time: '8 min (Heli)',
      icon: '🛕',
      tip: 'One of the Chota Char Dhams. A divine spiritual experience at 3,583m altitude.'
    }
  ];

  constructor() {
    this.title.setTitle('Kedar Yatra Resort | Comfortable Stay on Kedarnath Route');
    this.meta.updateTag({ name: 'description', content: 'Experience serene mountain stays at Kedar Yatra Resort, the perfect base for your Kedarnath journey. Luxury rooms, pure veg food, and 24/7 yatra assistance.' });

    afterNextRender(() => {
      this.startAutoPlay();
    });
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextSlide() {
    this.currentSlide.update(v => (v + 1) % this.slides.length);
  }

  prevSlide() {
    this.currentSlide.update(v => (v - 1 + this.slides.length) % this.slides.length);
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  getWhatsAppLink(message: string): string {
    return `https://wa.me/917467840098?text=${encodeURIComponent(message)}`;
  }

  getRangeArray(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }
}
