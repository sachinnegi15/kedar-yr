import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {
    this.title.setTitle('Gallery | Stays & Himalayan Views | Kedar Yatra Resort');
    this.meta.updateTag({ name: 'description', content: 'Explore the stunning vistas of the Garhwal Himalayas and the serene interiors of Kedar Yatra Resort through our photo gallery.' });
  }

  images = [
    { url: 'https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg?cs=srgb&dl=pexels-alok-kumar-273007-15031440.jpg&fm=jpg', category: 'Resort', title: 'Mountain Sunset' },
    { url: 'https://images.unsplash.com/photo-1722619793183-3787ca05d61f?q=80&w=1200&auto=format&fit=crop', category: 'Resort', title: 'Mountain Sunset' },
    { url: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1200&auto=format&fit=crop', category: 'Views', title: 'Kedarnath Valley' },
    { url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop', category: 'Rooms', title: 'Deluxe Interior' },
    { url: 'https://images.unsplash.com/photo-1591088398332-8596b4d9b63d?q=80&w=1200&auto=format&fit=crop', category: 'Rooms', title: 'Premium Suite' },
    // { url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop', category: 'Views', title: 'Sunrise Trek' },
    { url: 'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?q=80&w=1200&auto=format&fit=crop', category: 'Resort', title: 'Family Lounge' },
    { url: 'https://images.unsplash.com/photo-1449156656403-f39088611809?q=80&w=1200&auto=format&fit=crop', category: 'Views', title: 'Lush Valleys' },
    { url: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1200&auto=format&fit=crop', category: 'Resort', title: 'Garden View' },
    { url: 'https://images.pexels.com/photos/19010047/pexels-photo-19010047.jpeg?cs=srgb&dl=pexels-soubhagya23-19010047.jpg&fm=jpg', category: 'Views', title: 'Garden View' },
    { url: 'https://tripxl.com/blog/wp-content/uploads/2024/12/Location-26.jpg', category: 'Views', title: 'Garden View' },
    { url: 'https://images.pexels.com/photos/18359762/pexels-photo-18359762.jpeg?cs=srgb&dl=pexels-soubhagya23-18359762.jpg&fm=jpg', category: 'Views', title: 'Garden View' },
    { url: 'https://images.pexels.com/photos/6076728/pexels-photo-6076728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', category: 'Views', title: 'Garden View' },
    { url: 'https://images.pexels.com/photos/35196748/pexels-photo-35196748.jpeg?cs=srgb&dl=pexels-pixel9inja-35196748.jpg&fm=jpg', category: 'Views', title: 'Garden View' },


    { url: 'https://images.pexels.com/photos/12151764/pexels-photo-12151764.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200', category: 'Resort', title: 'Garden View' }

  ];

  selectedCategory = 'All';

  get filteredImages() {
    return this.selectedCategory === 'All' 
      ? this.images 
      : this.images.filter(img => img.category === this.selectedCategory);
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }
}
