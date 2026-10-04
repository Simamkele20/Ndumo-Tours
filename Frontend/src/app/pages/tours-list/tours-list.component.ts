import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ScrollRevealDirective, StaggerDirective } from '../../shared/directives/index';

interface Tour {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  highlights: string[];
}

@Component({
  selector: 'app-tours-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    ScrollRevealDirective,
    StaggerDirective,
  ],
  template: `
    <!-- Hero Section -->
    <section class="tours-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 appScrollReveal [delay]="0.1">Explore Our Curated Tours</h1>
        <p appScrollReveal [delay]="0.2">
          Handpicked experiences across Southern Africa, designed for travelers who seek authenticity
        </p>
      </div>
    </section>

    <!-- Tours Grid -->
    <section class="tours-section">
      <div class="container-large">
        <div class="tours-grid" appStagger [staggerDelay]="0.1">
          <div *ngFor="let tour of allTours; let i = index">
            <mat-card class="tour-card" appScrollReveal [delay]="i * 0.05">
              <mat-card-content>
                <h3>{{ tour.title }}</h3>
                <p>{{ tour.description }}</p>
              </mat-card-content>
            </mat-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="final-cta-section">
      <div class="container-large">
        <h2 appScrollReveal [delay]="0">Can't Find Your Perfect Tour?</h2>
        <p appScrollReveal [delay]="0.1">
          We custom-design bespoke itineraries tailored exclusively to your dreams and preferences.
        </p>
        <div appScrollReveal [delay]="0.2">
          <a href="https://wa.me/27631344422" target="_blank" mat-raised-button color="accent" class="btn-large">
            Let's Create Your Custom Tour
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }

      .container-large {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;
        width: 100%;
      }

      /* ============================================ */
      /* SECTIONS - FULL WIDTH */
      /* ============================================ */

      .tours-hero,
      .filter-section,
      .tours-section,
      .final-cta-section {
        width: 100%;
      }

      /* ============================================ */
      /* HERO SECTION */
      /* ============================================ */

      .tours-hero {
        position: relative;
        background-image: url('/assets/images/mpumelelo-macu-l_YNobbDYJk-unsplash-scaled-e1773759799774.jpg');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        color: white;
        padding: 6rem 1.5rem;
        text-align: center;
        min-height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      .tours-hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.45);
        z-index: 1;
      }

      .hero-content {
        position: relative;
        z-index: 2;
        max-width: 700px;
      }

      .tours-hero h1 {
        font-size: 3.5rem;
        font-weight: 700;
        margin: 0 0 1rem;
        line-height: 1.1;
        letter-spacing: -1px;
        text-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
        color: #ffffff;
      }

      .tours-hero p {
        font-size: 1.25rem;
        font-weight: 300;
        margin: 0;
        opacity: 1;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        color: #ffffff;
      }

      /* ============================================ */
      /* ============================================ */
      /* TOURS SECTION */
      /* ============================================ */

      .tours-section {
        padding: 5rem 1.5rem;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .tours-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2.5rem;
      }

      .tour-card {
        background: white;
        border: 1px solid var(--border-color);
        border-radius: 12px;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .tour-card:hover {
        box-shadow: 0 16px 40px rgba(26, 95, 61, 0.15);
        transform: translateY(-8px);
        border-color: var(--accent-color);
      }



      .tour-card mat-card-content {
        padding: 1.5rem;
        flex: 1;
      }

      .tour-card h3 {
        font-size: 1.3rem;
        font-weight: 600;
        color: var(--text-color);
        margin: 0 0 0.75rem;
      }

      .tour-card p {
        font-size: 0.95rem;
        color: var(--muted-color);
        margin: 0 0 1.5rem;
        line-height: 1.6;
      }

      /* ============================================ */
      /* FINAL CTA SECTION */
      /* ============================================ */

      .final-cta-section {
        padding: 5rem 1.5rem;
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        color: white;
        text-align: center;
      }

      .final-cta-section h2 {
        font-size: 2.75rem;
        font-weight: 700;
        margin: 0 0 1rem;
        letter-spacing: -0.5px;
      }

      .final-cta-section p {
        font-size: 1.15rem;
        margin: 0 0 2.5rem;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
        opacity: 0.95;
      }

      .btn-large {
        background-color: #c9a961 !important;
        color: white !important;
        font-weight: 600;
        padding: 1rem 2rem !important;
        font-size: 1rem;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
      }

      .btn-large:hover {
        background-color: #e0c084 !important;
      }

      /* ============================================ */
      /* RESPONSIVE DESIGN */
      /* ============================================ */

      @media (max-width: 1024px) {
        .container-large {
          padding: 0 1.5rem;
        }

        .tours-hero h1 {
          font-size: 2.5rem;
        }

        .tours-hero p {
          font-size: 1rem;
        }

        .tours-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          padding: 0 1rem;
          margin: 0 auto;
        }

        .tour-card h3 {
          font-size: 1.1rem;
        }

        .tour-card p {
          font-size: 0.9rem;
        }
      }

      @media (max-width: 768px) {
        .container-large {
          padding: 0 1rem;
        }

        .tours-hero {
          padding: 3rem 1rem;
          min-height: 280px;
        }

        .tours-hero h1 {
          font-size: 1.75rem;
          text-align: center;
        }

        .tours-hero p {
          font-size: 0.95rem;
          text-align: center;
        }

        .tours-section {
          padding: 2.5rem 1rem;
          text-align: center;
        }

        .final-cta-section {
          padding: 2.5rem 1rem;
          text-align: center;
        }

        .tours-grid {
          grid-template-columns: 1fr;
          gap: 1.2rem;
          padding: 0;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 100%;
        }

        .tours-grid > div {
          width: 100%;
          max-width: 350px;
        }

        .tour-card {
          width: 100%;
        }

        .tour-card h3 {
          font-size: 1rem;
          text-align: center;
        }

        .tour-card p {
          font-size: 0.85rem;
          text-align: center;
        }

        .tour-card mat-card-content {
          padding: 1.2rem;
          text-align: center;
        }

        .tour-meta {
          flex-direction: column;
          gap: 0.5rem;
          justify-content: center;
        }

        .final-cta-section h2 {
          font-size: 1.5rem;
        }

        .final-cta-section p {
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }

        .btn-large {
          padding: 0.75rem 1.5rem !important;
          font-size: 0.9rem;
        }
      }
    `,
  ],
})
export class ToursListComponent implements OnInit {
  selectedCategory = 'All';
  categories = ['All', 'Cape Town', 'Wine', 'Safari', 'Cultural'];
  allTours: Tour[] = [];

  capeTownTours: Tour[] = [
    {
      id: '1',
      title: 'Table Mountain Experience',
      category: 'Cape Town',
      description:
        'Iconic views of Cape Town\'s most famous landmark with guided exploration and photo opportunities.',
      image: '/assets/images/Services.jpg',
      price: 'R1,200',
      duration: '4 hours',
      highlights: ['Scenic views', 'Photography', 'Guided tour', 'Sunset option'],
    },
    {
      id: '2',
      title: 'Cape Peninsula Tours',
      category: 'Cape Town',
      description:
        'Journey through Cape Point, Camps Bay, and scenic coastal drives with stops at picturesque viewpoints.',
      image: '/assets/images/13.jpg',
      price: 'R1,500',
      duration: '6 hours',
      highlights: ['Cape Point', 'Camps Bay', 'Coastal scenery', 'Local insights'],
    },
    {
      id: '3',
      title: 'Penguin Beach Tours',
      category: 'Cape Town',
      description:
        'Experience Africa\'s only penguin colony at Boulders Beach with expert naturalist guides.',
      image: '/assets/images/14.jpg',
      price: 'R1,000',
      duration: '3 hours',
      highlights: ['Wildlife', 'Photography', 'Nature', 'Educational'],
    },
  ];

  wineTours: Tour[] = [
    {
      id: '4',
      title: 'Stellenbosch Wine Tours',
      category: 'Wine',
      description:
        'Visit award-winning estates in South Africa\'s premier wine region with tasting experiences.',
      image: '/assets/images/12-e1773762608565.jpg',
      price: 'R1,800',
      duration: '6 hours',
      highlights: ['Wine tasting', 'Cellar tour', 'Gourmet lunch', 'Beautiful estates'],
    },
    {
      id: '5',
      title: 'Franschhoek Wine Tours',
      category: 'Wine',
      description:
        'Explore charming French-inspired villages and renowned wine estates in the scenic Winelands.',
      image: '/assets/images/2.png',
      price: 'R2,000',
      duration: '8 hours',
      highlights: ['French charm', 'Wine tasting', 'Village exploration', 'Fine dining'],
    },
  ];

  safariTours: Tour[] = [
    {
      id: '6',
      title: 'Big 5 Safari Tours',
      category: 'Safari',
      description:
        'Immersive wildlife experiences featuring lions, leopards, elephants, buffalo, and rhino.',
      image: '/assets/images/Crop860x650.jpeg',
      price: 'R3,500',
      duration: '3-5 days',
      highlights: ['Big 5', 'Game drive', 'Expert guides', 'Wildlife photography'],
    },
    {
      id: '7',
      title: 'Victoria Falls Tours',
      category: 'Safari',
      description:
        'Experience Africa\'s most spectacular waterfall with adventure activities and scenic tours.',
      image: '/assets/images/michael-schofield-IhuzPxyBunQ-unsplash-scaled.jpg',
      price: 'R2,500',
      duration: '2 days',
      highlights: ['Waterfall views', 'Adventure', 'Photography', 'Local culture'],
    },
  ];

  culturalTours: Tour[] = [
    {
      id: '8',
      title: 'Heritage Site Tours',
      category: 'Cultural',
      description:
        'Explore significant historical and cultural sites across South Africa with contextual storytelling.',
      image: '/assets/images/9.jpg',
      price: 'R1,300',
      duration: '5 hours',
      highlights: ['History', 'Cultural sites', 'Expert guides', 'Storytelling'],
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.allTours = [
      ...this.capeTownTours,
      ...this.wineTours,
      ...this.safariTours,
      ...this.culturalTours,
    ];
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  isVisible(category: string): boolean {
    return this.selectedCategory === 'All' || this.selectedCategory === category;
  }

  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      All: 'explore',
      'Cape Town': 'location_city',
      Wine: 'local_bar',
      Safari: 'parks',
      Cultural: 'museum',
    };
    return icons[category] || 'tour';
  }

  bookTour(tour: Tour): void {
    const message = `Hi! I'm interested in booking: ${tour.title}`;
    const whatsappUrl = `https://wa.me/27631344422?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  viewDetails(tour: Tour): void {
    console.log('View details for:', tour);
    // TODO: Implement modal or navigate to detail page
  }
}
