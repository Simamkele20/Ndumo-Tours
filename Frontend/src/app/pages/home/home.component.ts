import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ScrollRevealDirective, ParallaxDirective, StaggerDirective } from '../../shared/directives/index';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ScrollRevealDirective,
    ParallaxDirective,
    StaggerDirective,
  ],
  template: `
    <!-- Hero Section with Parallax -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title" appScrollReveal [delay]="0.1">
          Honour the Journey.<br />Discover Africa.
        </h1>
        <p class="hero-subtitle" appScrollReveal [delay]="0.2">
          Bespoke travel experiences across Southern Africa,<br />crafted exclusively around you
        </p>
        <div class="hero-ctas" appScrollReveal [delay]="0.3">
          <a href="https://wa.me/27631344422" target="_blank" mat-raised-button color="accent" class="btn-hero">
            Start Planning
          </a>
          <a routerLink="/tours" mat-stroked-button class="btn-hero-secondary">
            Browse Tours
          </a>
        </div>
      </div>
      <div class="hero-scroll-indicator">
        ↓
      </div>
    </section>

    <!-- Value Propositions Section -->
    <section class="values-section" appStagger [staggerDelay]="0.15">
      <div class="container-large">
        <div class="section-header" appScrollReveal>
          <h2 class="section-title">How We Do It Differently</h2>
          <p class="section-subtitle">
            Our approach to travel is rooted in listening, authenticity, and local expertise
          </p>
        </div>

        <div class="values-grid">
          <mat-card class="value-card" appScrollReveal [delay]="0">
            <div class="value-card-image" style="background-image: url('/assets/images/Home1.jpg')"></div>
            <mat-card-header class="value-card-header">
              <mat-card-title>We Listen First</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p>
                Before planning begins, we invest time in understanding you: your interests, pace, group
                dynamics, and travel style. Your experience comes first.
              </p>
            </mat-card-content>
          </mat-card>

          <mat-card class="value-card" appScrollReveal [delay]="0.1">
            <div class="value-card-image" style="background-image: url('/assets/images/Home2.png')"></div>
            <mat-card-header class="value-card-header">
              <mat-card-title>Built Around You</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p>
                We don't offer off-the-shelf itineraries. Every journey is designed specifically for the
                people taking it—customized until it fits perfectly.
              </p>
            </mat-card-content>
          </mat-card>

          <mat-card class="value-card" appScrollReveal [delay]="0.2">
            <div class="value-card-image" style="background-image: url('/assets/images/Home3.jpg')"></div>
            <mat-card-header class="value-card-header">
              <mat-card-title>Rooted in Southern Africa</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p>
                We know this region deeply: its roads, stories, hidden gems, and people. That intimate
                knowledge transforms good trips into unforgettable adventures.
              </p>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </section>

    <!-- Journey Process Section -->
    <section class="journey-section">
      <div class="container-large">
        <div class="section-header" appScrollReveal>
          <h2 class="section-title">Your Journey in Three Steps</h2>
          <p class="section-subtitle">Simple, transparent, and centered on you</p>
        </div>

        <div class="journey-steps" appStagger [staggerDelay]="0.15">
          <div class="step-item" appScrollReveal [delay]="0">
            <div class="step-number">01</div>
            <h3>Tell Us About Yourself</h3>
            <p>Share your interests, travel style, budget, and what matters most to you. No rigid questionnaires—just a genuine conversation.</p>
          </div>

          <div class="step-connector">
          </div>

          <div class="step-item" appScrollReveal [delay]="0.1">
            <div class="step-number">02</div>
            <h3>We Design Together</h3>
            <p>We craft your itinerary collaboratively, combining our expertise with your vision. You'll approve every detail before we finalize anything.</p>
          </div>

          <div class="step-connector">
          </div>

          <div class="step-item" appScrollReveal [delay]="0.2">
            <div class="step-number">03</div>
            <h3>We Guide You</h3>
            <p>Experience your journey with expert local guides, premium accommodations, and our support every step of the way.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="container-large">
        <div class="section-header" appScrollReveal>
          <h2 class="section-title">Stories from Our Travelers</h2>
          <p class="section-subtitle">Authentic experiences shared by those who've journeyed with us</p>
        </div>

        <div class="testimonials-grid" appStagger [staggerDelay]="0.15">
          <mat-card class="testimonial-card" appScrollReveal [delay]="0">
            <mat-card-content>
              <div class="testimonial-rating">
                ⭐⭐⭐⭐⭐
              </div>
              <p class="testimonial-text">
                "What struck me most was how carefully everything was listened to before suggestions were made. I mentioned wanting to understand Cape
                Town's history—not just see landmarks. What followed was one of the most thoughtful days I've had as a traveller in twenty years."
              </p>
              <p class="testimonial-author">Anneliese B., Hamburg, Germany</p>
            </mat-card-content>
          </mat-card>

          <mat-card class="testimonial-card" appScrollReveal [delay]="0.1">
            <mat-card-content>
              <div class="testimonial-rating">
                ⭐⭐⭐⭐⭐
              </div>
              <p class="testimonial-text">
                "Ndumo didn't just organize a tour—they created an experience that felt personal and intimate. Every guide knew exactly what would
                interest us, every stop was perfectly timed. Truly exceptional service."
              </p>
              <p class="testimonial-author">Marcus T., Sydney, Australia</p>
            </mat-card-content>
          </mat-card>

          <mat-card class="testimonial-card" appScrollReveal [delay]="0.2">
            <mat-card-content>
              <div class="testimonial-rating">
                ⭐⭐⭐⭐⭐
              </div>
              <p class="testimonial-text">
                "From the first email to the last goodbye, professionalism met genuine warmth. They didn't just meet expectations—they exceeded them in
                every way. Already planning our next trip with them!"
              </p>
              <p class="testimonial-author">Elena & Paolo, Milan, Italy</p>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </section>

    <!-- Trust Section -->
    <section class="trust-section">
      <div class="container-large">
        <div class="trust-content">
          <h2 appScrollReveal>Trusted by Travelers Worldwide</h2>
          <div class="trust-grid" appStagger [staggerDelay]="0.1">
            <div class="trust-item" appScrollReveal [delay]="0">
              <h3>Verified Reviews</h3>
              <p>5-star rated on TripAdvisor & Google</p>
            </div>
            <div class="trust-item" appScrollReveal [delay]="0.05">
              <h3>Global Reach</h3>
              <p>Travelers from 40+ countries</p>
            </div>
            <div class="trust-item" appScrollReveal [delay]="0.1">
              <h3>Local Experts</h3>
              <p>Handpicked guides & partners</p>
            </div>
            <div class="trust-item" appScrollReveal [delay]="0.15">
              <h3>Peace of Mind</h3>
              <p>Full travel insurance included</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-final-section">
      <div class="container-large">
        <h2 appScrollReveal>Ready for Your Next Adventure?</h2>
        <p appScrollReveal [delay]="0.1">
          Let's start with a conversation about where your dreams take you.
        </p>
        <div class="cta-buttons" appScrollReveal [delay]="0.2">
          <a href="https://wa.me/27631344422" target="_blank" mat-raised-button color="accent" class="btn-large">
            Chat on WhatsApp
          </a>
          <a routerLink="/contact" mat-stroked-button class="btn-large">
            Get in Touch
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

      .hero-section,
      .values-section,
      .journey-section,
      .testimonials-section,
      .trust-section,
      .cta-final-section {
        width: 100%;
      }

      /* ============================================ */
      /* HERO SECTION */
      /* ============================================ */

      .hero-section {
        position: relative;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: white;
        overflow: hidden;
        background-attachment: fixed;
        background-image: url('/assets/images/9.jpg');
        background-size: cover;
        background-position: center;
      }

      .hero-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.45);
        z-index: 1;
      }

      .hero-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
        display: none;
      }

      .hero-content {
        position: relative;
        z-index: 2;
        max-width: 900px;
        padding: 2rem;
        animation: fadeInUp 1s ease-out;
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .hero-title {
        font-size: 4rem;
        font-weight: 700;
        margin: 0 0 1.5rem;
        line-height: 1.1;
        letter-spacing: -1px;
        text-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
        color: #ffffff;
      }

      .hero-subtitle {
        font-size: 1.5rem;
        font-weight: 300;
        margin: 0 0 2.5rem;
        color: #ffffff;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
      }

      .hero-ctas {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      .btn-hero {
        background-color: #c9a961 !important;
        color: white !important;
        font-weight: 600;
        padding: 1rem 2rem !important;
        font-size: 1rem;
        transition: all 0.3s ease;
        border-radius: 4px !important;
        white-space: nowrap;
      }

      .btn-hero:hover {
        background-color: #e0c084 !important;
        transform: translateY(-3px);
        box-shadow: 0 12px 30px rgba(201, 169, 97, 0.4);
      }

      .btn-hero-secondary {
        background-color: transparent !important;
        border: 2px solid white !important;
        color: white !important;
        font-weight: 600;
        padding: 0.875rem 1.875rem !important;
        font-size: 1rem;
        border-radius: 4px !important;
        white-space: nowrap;
      }

      .btn-hero-secondary:hover {
        background-color: rgba(255, 255, 255, 0.1) !important;
        transform: translateY(-3px);
      }

      .hero-scroll-indicator {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        animation: bounce 2s infinite;
      }

      @keyframes bounce {
        0%,
        100% {
          transform: translateX(-50%) translateY(0);
        }
        50% {
          transform: translateX(-50%) translateY(10px);
        }
      }

      /* ============================================ */
      /* SECTION HEADERS */
      /* ============================================ */

      .section-header {
        text-align: center;
        margin-bottom: 3.5rem;
      }

      .section-title {
        font-size: 2.75rem;
        font-weight: 700;
        margin: 0 0 1rem;
        color: var(--text-color);
        letter-spacing: -0.5px;
      }

      .section-subtitle {
        font-size: 1.15rem;
        color: var(--muted-color);
        margin: 0;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }

      /* ============================================ */
      /* VALUES SECTION */
      /* ============================================ */

      .values-section {
        padding: 5rem 1.5rem;
        background-color: white;
      }

      .values-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
        gap: 2.5rem;
      }

      .value-card {
        background: white;
        border: none;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        overflow: hidden;
        text-align: center;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .value-card:hover {
        box-shadow: 0 16px 32px rgba(26, 95, 61, 0.15);
        transform: translateY(-4px);
      }

      .value-card-image {
        width: 100%;
        height: 400px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      .value-card-header {
        flex-direction: column;
        text-align: center;
        margin-bottom: 0;
        padding: 2.5rem 2rem 1.5rem;
        background: white;
      }

      .value-card mat-card-content {
        padding: 0 2rem 2.5rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }

      .value-icon {
        font-size: 3rem;
        color: var(--primary-color);
        margin-bottom: 1rem !important;
      }

      .value-card mat-card-title {
        font-size: 1.35rem;
        font-weight: 600;
        color: var(--text-color);
        margin: 0 0 0.5rem 0;
        letter-spacing: -0.5px;
      }

      .value-card p {
        font-size: 0.95rem;
        line-height: 1.8;
        color: var(--muted-color);
        margin: 0;
      }

      /* ============================================ */
      /* JOURNEY SECTION */
      /* ============================================ */

      .journey-section {
        padding: 5rem 1.5rem;
        background: linear-gradient(180deg, var(--cream-color) 0%, white 100%);
      }

      .journey-steps {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        flex-wrap: wrap;
      }

      .step-item {
        flex: 1;
        min-width: 280px;
        padding: 2.5rem 2rem;
        background: white;
        border-radius: 12px;
        text-align: center;
        border: 2px solid transparent;
        transition: all 0.3s ease;
      }

      .step-item:hover {
        border-color: var(--primary-color);
        background-color: rgba(26, 95, 61, 0.02);
      }

      .step-number {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--accent-color);
        margin-bottom: 1rem;
      }

      .step-item h3 {
        font-size: 1.3rem;
        font-weight: 600;
        color: var(--text-color);
        margin: 0 0 1rem;
      }

      .step-item p {
        font-size: 0.95rem;
        line-height: 1.6;
        color: var(--muted-color);
        margin: 0;
      }

      .step-connector {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--accent-color);
        font-size: 2rem;
        margin: 0 1rem;
      }

      @media (max-width: 768px) {
        .journey-steps {
          flex-direction: column;
        }

        .step-connector {
          transform: rotate(90deg);
          margin: 1rem 0;
        }
      }

      /* ============================================ */
      /* TESTIMONIALS SECTION */
      /* ============================================ */

      .testimonials-section {
        padding: 5rem 1.5rem;
        background: white;
      }

      .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2.5rem;
      }

      .testimonial-card {
        background: white;
        border: 1px solid var(--border-color);
        border-radius: 12px;
        padding: 2.5rem !important;
        text-align: center;
        transition: all 0.3s ease;
      }

      .testimonial-card:hover {
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
        transform: translateY(-6px);
        border-color: var(--accent-color);
      }

      .testimonial-rating {
        display: flex;
        justify-content: center;
        gap: 0.25rem;
        margin-bottom: 1.5rem;
      }

      .star-icon {
        font-size: 1.2rem;
        color: #fbbf24;
      }

      .testimonial-text {
        font-size: 0.95rem;
        line-height: 1.8;
        color: var(--text-color);
        margin: 0 0 1.5rem;
        font-style: italic;
      }

      .testimonial-author {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--primary-color);
        margin: 0;
      }

      /* ============================================ */
      /* TRUST SECTION */
      /* ============================================ */

      .trust-section {
        padding: 5rem 1.5rem;
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        color: white;
      }

      .trust-content h2 {
        font-size: 2.75rem;
        font-weight: 700;
        text-align: center;
        margin-bottom: 3.5rem;
        letter-spacing: -0.5px;
      }

      .trust-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 2.5rem;
      }

      .trust-item {
        text-align: center;
        padding: 2rem;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: all 0.3s ease;
      }

      .trust-item:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(-4px);
      }

      .trust-item mat-icon {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #c9a961;
      }

      .trust-item h3 {
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0 0 0.5rem;
      }

      .trust-item p {
        font-size: 0.9rem;
        margin: 0;
        opacity: 0.9;
      }

      /* ============================================ */
      /* FINAL CTA SECTION */
      /* ============================================ */

      .cta-final-section {
        padding: 5rem 1.5rem;
        background: white;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .cta-final-section h2 {
        font-size: 2.75rem;
        font-weight: 700;
        margin: 0 0 1rem;
        color: var(--text-color);
      }

      .cta-final-section p {
        font-size: 1.15rem;
        color: var(--muted-color);
        margin: 0 0 2.5rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }

      .cta-buttons {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      .btn-large {
        padding: 1rem 2rem !important;
        font-size: 1rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background-color: #c9a961 !important;
        color: white !important;
      }

      /* ============================================ */
      /* RESPONSIVE DESIGN */
      /* ============================================ */

      @media (max-width: 1024px) {
        .hero-title {
          font-size: 3rem;
        }

        .hero-subtitle {
          font-size: 1.25rem;
        }

        .section-title {
          font-size: 2.25rem;
        }

        .trust-content h2 {
          font-size: 2.25rem;
        }

        .cta-final-section h2 {
          font-size: 2.25rem;
        }
      }

      @media (max-width: 1024px) {
        .container-large {
          padding: 0 1.5rem;
        }

        .hero-section {
          min-height: 90vh;
        }

        .hero-title {
          font-size: 2.5rem;
        }

        .hero-subtitle {
          font-size: 1.05rem;
        }

        .section-title {
          font-size: 2rem;
        }

        .section-subtitle {
          font-size: 1.05rem;
        }

        .values-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .journey-steps {
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
      }

      @media (max-width: 768px) {
        .container-large {
          padding: 0 1rem;
        }

        .hero-section {
          min-height: 70vh;
          padding: 3rem 0;
        }

        .hero-content {
          padding: 0 1rem;
          text-align: center;
        }

        .hero-title {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .hero-subtitle {
          font-size: 0.95rem;
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .hero-ctas {
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }

        .btn-hero,
        .btn-hero-secondary {
          padding: 0.875rem 2rem !important;
          font-size: 0.95rem;
          width: 100%;
          max-width: 300px;
        }

        .hero-scroll-indicator {
          display: none;
        }

        .values-section,
        .journey-section,
        .testimonials-section,
        .trust-section,
        .cta-final-section {
          padding: 2.5rem 1rem;
        }

        .section-header {
          margin-bottom: 2rem;
          text-align: center;
        }

        .section-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 0.95rem;
          margin: 0 auto;
        }

        .values-grid {
          gap: 1rem;
          grid-template-columns: 1fr;
        }

        .value-card {
          padding: 0 !important;
        }

        .value-card-image {
          height: 200px;
        }

        .value-card-header {
          padding: 0 !important;
        }

        .value-card-content {
          padding: 1rem !important;
        }

        .value-card-title {
          font-size: 1.1rem !important;
        }

        .journey-steps {
          grid-template-columns: 1fr;
          gap: 1.2rem;
          flex-direction: column;
        }

        .step-item {
          padding: 1.5rem 1rem;
          text-align: center;
        }

        .step-item div:first-child {
          font-size: 1.8rem;
        }

        .step-item h3 {
          font-size: 1.1rem;
        }

        .step-item p {
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .step-connector {
          display: none;
        }

        .testimonials-grid {
          grid-template-columns: 1fr;
          gap: 1.2rem;
        }

        .testimonial-card {
          padding: 1.2rem;
        }

        .testimonial-text {
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .testimonial-author {
          font-size: 0.85rem;
        }

        .trust-content {
          text-align: center;
        }

        .trust-grid {
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .trust-item h3 {
          font-size: 1rem;
        }

        .trust-item p {
          font-size: 0.85rem;
        }

        .cta-final-section h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          text-align: center;
        }

        .cta-final-section p {
          font-size: 0.95rem;
          text-align: center;
          margin-bottom: 2rem;
        }

        .cta-buttons {
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }

        .btn-large {
          width: 100%;
          max-width: 280px;
          padding: 0.875rem 1.5rem !important;
          font-size: 0.95rem;
        }
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Component initialization
  }
}
