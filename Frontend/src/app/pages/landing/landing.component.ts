import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ScrollRevealDirective, ParallaxDirective, StaggerDirective } from '../../shared/directives/index';
import { WordPressService } from '../../services/wordpress.service';

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
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    ScrollRevealDirective,
    ParallaxDirective,
    StaggerDirective,
  ],
  template: `
    <!-- ========================================== -->
    <!-- SECTION 1: HERO -->
    <!-- ========================================== -->
    <section id="home" class="hero-section">
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
          <a (click)="scrollTo('tours')" mat-stroked-button class="btn-hero-secondary">
            Browse Tours
          </a>
        </div>
      </div>
      <div class="hero-scroll-indicator">
        ↓
      </div>
    </section>

    <!-- ========================================== -->
    <!-- SECTION 2: VALUE PROPOSITIONS -->
    <!-- ========================================== -->
    <section id="how-we-differ" class="values-section" appStagger [staggerDelay]="0.15">
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

    <!-- ========================================== -->
    <!-- SECTION 3: JOURNEY PROCESS -->
    <!-- ========================================== -->
    <section id="how-it-works" class="journey-section">
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

          <div class="step-connector"></div>

          <div class="step-item" appScrollReveal [delay]="0.1">
            <div class="step-number">02</div>
            <h3>We Design Together</h3>
            <p>We craft your itinerary collaboratively, combining our expertise with your vision. You'll approve every detail before we finalize anything.</p>
          </div>

          <div class="step-connector"></div>

          <div class="step-item" appScrollReveal [delay]="0.2">
            <div class="step-number">03</div>
            <h3>We Guide You</h3>
            <p>Experience your journey with expert local guides, premium accommodations, and our support every step of the way.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================== -->
    <!-- SECTION 4: TOURS GRID -->
    <!-- ========================================== -->
    <section id="tours" class="tours-section">
      <div class="container-large">
        <div class="section-header" appScrollReveal>
          <h2 class="section-title">Explore Our Curated Tours</h2>
          <p class="section-subtitle">
            Handpicked experiences across Southern Africa, designed for travelers who seek authenticity
          </p>
        </div>

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

    <!-- ========================================== -->
    <!-- SECTION 5: PREMIUM SHUTTLE -->
    <!-- ========================================== -->
    <section id="shuttle" class="shuttle-section">
      <div class="container-large">
        <div class="section-header" appScrollReveal>
          <h2 class="section-title">Premium Shuttle Hire</h2>
          <p class="section-subtitle">Your journey taken in luxury</p>
        </div>
        <div class="shuttle-content" appScrollReveal>
          <p class="shuttle-info">We do not publish fixed rates because we do not offer fixed experiences. Chat to us to build yours.</p>
          <ul class="shuttle-list">
            <li>✓ Airport & Hotel Transfers</li>
            <li>✓ Corporate Events</li>
            <li>✓ Road Trips</li>
            <li>✓ Day Outings</li>
          </ul>
          <p class="shuttle-note">Get a journey route & quote by contacting us</p>
          <a (click)="scrollTo('contact')" mat-raised-button color="accent" class="btn-shuttle">Contact Us</a>
        </div>
      </div>
    </section>

    <!-- ========================================== -->
    <!-- SECTION 6: ABOUT NDUMO -->
    <!-- ========================================== -->
    <section id="about" class="about-section">
      <div class="container-large">
        <div class="about-story" appScrollReveal>
          <div class="story-text">
            <h2>More Than a Tour Company</h2>
            <p>We are a small, people-first travel business rooted in Cape Town and passionate about Southern Africa.</p>
            <p class="tagline"><strong>Every journey we build is personal, considered, and guided by someone who genuinely loves this land.</strong></p>
            
            <h3>Ndumo: A Name That Means Something</h3>
            <p>Ndumo is a Nguni word meaning Honour, Reputation, Esteem, and Prominence. This business was named in honour of our founder's late father, a man whose life embodied everything that word represents. The name is not a logo—it is a standard. One we carry into every trip we plan, every client we meet, and every experience we build.</p>
          </div>
          <img src="https://ndumotours.com/wp-content/uploads/2026/03/3-1024x576.jpg" alt="Ndumo Story" class="story-image">
        </div>

        <div class="values-items" appStagger [staggerDelay]="0.1">
          <div class="value-item" appScrollReveal [delay]="0">
            <h3>Honour</h3>
            <p>We carry our name's meaning into every interaction. With clients, with partners, and with the places we visit. We do not cut corners. We show up with integrity.</p>
          </div>
          <div class="value-item" appScrollReveal [delay]="0.1">
            <h3>Listening</h3>
            <p>Before we plan anything, we hear the person in front of us. Your needs, your concerns, your hopes. The itinerary comes after the conversation.</p>
          </div>
          <div class="value-item" appScrollReveal [delay]="0.2">
            <h3>Authenticity</h3>
            <p>We share Southern Africa honestly. Its beauty, its history, its complexity. We do not package it for consumption. We introduce you to it.</p>
          </div>
          <div class="value-item" appScrollReveal [delay]="0.3">
            <h3>Connection</h3>
            <p>We believe the best travel reveals how much we have in common. Across cultures, histories, and landscapes. We design for that discovery.</p>
          </div>
          <div class="value-item" appScrollReveal [delay]="0.4">
            <h3>Care</h3>
            <p>We move through the world carefully. For local communities, for wildlife, for the environment. Good travel and responsible travel are not in conflict.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================== -->
    <!-- SECTION 7: TESTIMONIALS -->
    <!-- ========================================== -->
    <section id="testimonials" class="testimonials-section">
      <div class="container-large">
        <div class="section-header" appScrollReveal>
          <h2 class="section-title">Stories from Our Travelers</h2>
          <p class="section-subtitle">Authentic experiences shared by those who've journeyed with us</p>
        </div>

        <div class="testimonials-grid" appStagger [staggerDelay]="0.15">
          <mat-card class="testimonial-card" appScrollReveal [delay]="0">
            <mat-card-content>
              <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <p class="testimonial-text">
                "What struck me most was how carefully everything was listened to before suggestions were made. I mentioned wanting to understand Cape
                Town's history—not just see landmarks. What followed was one of the most thoughtful days I've had as a traveller in twenty years."
              </p>
              <p class="testimonial-author">Anneliese B., Hamburg, Germany</p>
            </mat-card-content>
          </mat-card>

          <mat-card class="testimonial-card" appScrollReveal [delay]="0.1">
            <mat-card-content>
              <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <p class="testimonial-text">
                "Ndumo didn't just organize a tour—they created an experience that felt personal and intimate. Every guide knew exactly what would
                interest us, every stop was perfectly timed. Truly exceptional service."
              </p>
              <p class="testimonial-author">Marcus T., Sydney, Australia</p>
            </mat-card-content>
          </mat-card>

          <mat-card class="testimonial-card" appScrollReveal [delay]="0.2">
            <mat-card-content>
              <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
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

    <!-- ========================================== -->
    <!-- SECTION 8: CONTACT FORM -->
    <!-- ========================================== -->
    <section id="contact" class="contact-section">
      <div class="container-large">
        <div class="section-header" appScrollReveal>
          <h2 class="section-title">Let's Start a Conversation</h2>
          <p class="section-subtitle">About your next adventure</p>
        </div>

        <div class="contact-wrapper">
          <div class="contact-info-grid" appStagger [staggerDelay]="0.1">
            <div class="info-card" appScrollReveal [delay]="0">
              <h3>📧 EMAIL</h3>
              <a href="mailto:info&#64;ndumotours.com">info&#64;ndumotours.com</a>
            </div>
            <div class="info-card" appScrollReveal [delay]="0.05">
              <h3>📱 WHATSAPP</h3>
              <a href="https://wa.me/27631344422" target="_blank">+27 63 134 4422</a>
            </div>
            <div class="info-card" appScrollReveal [delay]="0.1">
              <h3>📍 LOCATION</h3>
              <p>Plumstead, Cape Town, South Africa</p>
            </div>
          </div>

          <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm" appScrollReveal [delay]="0.2">
            <div *ngIf="successMessage" class="alert alert-success">{{ successMessage }}</div>
            <div *ngIf="errorMessage" class="alert alert-error">{{ errorMessage }}</div>

            <div class="form-group">
              <label for="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                [(ngModel)]="formData.name"
                required
                [disabled]="isSubmitting"
              />
            </div>
            <div class="form-group">
              <label for="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                [(ngModel)]="formData.email"
                required
                [disabled]="isSubmitting"
              />
            </div>
            <div class="form-group">
              <label for="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                [(ngModel)]="formData.message"
                required
                [disabled]="isSubmitting"
              ></textarea>
            </div>
            <button type="submit" mat-raised-button color="accent" [disabled]="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
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
        font-size: clamp(2.5rem, 6vw, 4rem);
        font-weight: 700;
        margin: 0 0 1.5rem;
        line-height: 1.1;
        letter-spacing: -1px;
        text-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
        color: #ffffff;
      }

      .hero-subtitle {
        font-size: clamp(1.1rem, 2.5vw, 1.5rem);
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
        cursor: pointer;
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
        cursor: pointer;
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
        font-size: 1.5rem;
        cursor: pointer;
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
        font-size: clamp(2rem, 4vw, 2.75rem);
        font-weight: 700;
        margin: 0 0 1rem;
        color: #1a1a1a;
        letter-spacing: -0.5px;
      }

      .section-subtitle {
        font-size: 1.15rem;
        color: #666;
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
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
        height: 300px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      .value-card-header {
        flex-direction: column;
        text-align: center;
        margin-bottom: 0;
        padding: 2rem 1.5rem 1rem;
        background: white;
      }

      .value-card mat-card-content {
        padding: 0 1.5rem 2rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }

      .value-card mat-card-title {
        font-size: 1.35rem;
        font-weight: 600;
        color: #1a1a1a;
        margin: 0 0 0.5rem 0;
        letter-spacing: -0.5px;
      }

      .value-card p {
        font-size: 0.95rem;
        line-height: 1.8;
        color: #666;
        margin: 0;
      }

      /* ============================================ */
      /* JOURNEY SECTION */
      /* ============================================ */

      .journey-section {
        padding: 5rem 1.5rem;
        background-color: #f5f5f5;
      }

      .journey-steps {
        display: grid;
        grid-template-columns: 1fr auto 1fr auto 1fr;
        gap: 2rem;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
      }

      .step-item {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        text-align: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        transition: all 0.3s ease;
      }

      .step-item:hover {
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      }

      .step-number {
        font-size: 2.5rem;
        font-weight: 700;
        color: #c9a961;
        margin-bottom: 1rem;
      }

      .step-item h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 1rem 0;
        color: #1a1a1a;
      }

      .step-item p {
        color: #666;
        font-size: 0.95rem;
        line-height: 1.6;
        margin: 0;
      }

      .step-connector {
        height: 2px;
        background: linear-gradient(to right, transparent, #c9a961, transparent);
        display: none;
      }

      @media (max-width: 768px) {
        .journey-steps {
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        .step-connector {
          display: none;
        }
      }

      /* ============================================ */
      /* TOURS SECTION */
      /* ============================================ */

      .tours-section {
        padding: 5rem 1.5rem;
        background-color: white;
      }

      .tours-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
      }

      .tour-card {
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        overflow: hidden;
        transition: all 0.3s ease;
        cursor: pointer;
      }

      .tour-card:hover {
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
        transform: translateY(-4px);
      }

      .tour-card h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0 0 0.5rem;
        color: #1a1a1a;
      }

      .tour-card p {
        color: #666;
        font-size: 0.95rem;
        line-height: 1.6;
        margin: 0;
      }

      /* ============================================ */
      /* SHUTTLE SECTION */
      /* ============================================ */

      .shuttle-section {
        padding: 5rem 1.5rem;
        background: linear-gradient(135deg, #1a5f3d 0%, #2e8b57 100%);
        color: white;
      }

      .shuttle-content {
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
      }

      .shuttle-info {
        font-size: 1.1rem;
        margin: 2rem 0;
        line-height: 1.8;
      }

      .shuttle-list {
        list-style: none;
        padding: 2rem 0;
        text-align: left;
        max-width: 400px;
        margin: 0 auto;
      }

      .shuttle-list li {
        font-size: 1.1rem;
        padding: 0.75rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shuttle-note {
        font-size: 0.95rem;
        font-style: italic;
        margin: 2rem 0;
        opacity: 0.9;
      }

      .btn-shuttle {
        margin-top: 1.5rem;
        background-color: #c9a961 !important;
        color: #1a5f3d !important;
        font-weight: 600;
        padding: 0.75rem 2rem !important;
      }

      /* ============================================ */
      /* ABOUT SECTION */
      /* ============================================ */

      .about-section {
        padding: 5rem 1.5rem;
        background-color: #f5f5f5;
      }

      .about-story {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: center;
        margin-bottom: 4rem;
        background: white;
        padding: 3rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      }

      .story-text h2 {
        font-size: 2rem;
        font-weight: 700;
        margin: 0 0 1rem;
        color: #1a1a1a;
      }

      .story-text h3 {
        font-size: 1.35rem;
        font-weight: 600;
        margin: 2rem 0 1rem;
        color: #1a1a1a;
      }

      .story-text p {
        color: #666;
        font-size: 1rem;
        line-height: 1.8;
        margin: 1rem 0;
      }

      .tagline {
        font-size: 1.15rem !important;
        color: #1a5f3d !important;
      }

      .story-image {
        width: 100%;
        border-radius: 8px;
        object-fit: cover;
        max-height: 400px;
      }

      .values-items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 2rem;
      }

      .value-item {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        text-align: center;
      }

      .value-item h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0 0 0.75rem;
        color: #1a5f3d;
      }

      .value-item p {
        color: #666;
        font-size: 0.95rem;
        line-height: 1.6;
        margin: 0;
      }

      @media (max-width: 768px) {
        .about-story {
          grid-template-columns: 1fr;
          gap: 2rem;
          padding: 2rem;
        }
      }

      /* ============================================ */
      /* TESTIMONIALS SECTION */
      /* ============================================ */

      .testimonials-section {
        padding: 5rem 1.5rem;
        background-color: white;
      }

      .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }

      .testimonial-card {
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        overflow: hidden;
        transition: all 0.3s ease;
      }

      .testimonial-card:hover {
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
        transform: translateY(-4px);
      }

      .testimonial-rating {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      .testimonial-text {
        font-size: 0.95rem;
        line-height: 1.8;
        color: #666;
        font-style: italic;
        margin: 1rem 0;
      }

      .testimonial-author {
        font-weight: 600;
        color: #1a1a1a;
        margin: 0;
      }

      /* ============================================ */
      /* CONTACT SECTION */
      /* ============================================ */

      .contact-section {
        padding: 5rem 1.5rem;
        background-color: #f5f5f5;
      }

      .contact-wrapper {
        max-width: 900px;
        margin: 0 auto;
      }

      .contact-info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
      }

      .info-card {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        text-align: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      }

      .info-card h3 {
        font-size: 1rem;
        font-weight: 600;
        margin: 0 0 1rem;
        color: #1a1a1a;
      }

      .info-card a,
      .info-card p {
        color: #c9a961;
        text-decoration: none;
        font-weight: 500;
      }

      .info-card a:hover {
        text-decoration: underline;
      }

      .contact-form {
        background: white;
        padding: 3rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      }

      .form-group {
        margin-bottom: 1.5rem;
      }

      .form-group label {
        display: block;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #1a1a1a;
        font-size: 0.95rem;
      }

      .form-group input,
      .form-group textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-family: inherit;
        font-size: 1rem;
        transition: border-color 0.3s;
      }

      .form-group input:focus,
      .form-group textarea:focus {
        outline: none;
        border-color: #c9a961;
        box-shadow: 0 0 0 3px rgba(201, 169, 97, 0.1);
      }

      .alert {
        padding: 1rem;
        border-radius: 4px;
        margin-bottom: 1.5rem;
        font-weight: 500;
      }

      .alert-success {
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
      }

      .alert-error {
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
      }

      /* ============================================ */
      /* RESPONSIVE */
      /* ============================================ */

      @media (max-width: 768px) {
        .container-large {
          padding: 0 1rem;
        }

        .hero-title {
          font-size: 2rem;
        }

        .hero-subtitle {
          font-size: 1rem;
        }

        .hero-ctas {
          flex-direction: column;
          align-items: center;
        }

        .btn-hero,
        .btn-hero-secondary {
          width: 100%;
          max-width: 300px;
        }

        .section-title {
          font-size: 1.75rem;
        }

        .values-section,
        .journey-section,
        .tours-section,
        .shuttle-section,
        .about-section,
        .testimonials-section,
        .contact-section {
          padding: 3rem 1.5rem;
        }

        .contact-form {
          padding: 1.5rem;
        }
      }
    `,
  ],
})
export class LandingComponent implements OnInit {
  allTours: Tour[] = [];
  formData = {
    name: '',
    email: '',
    message: '',
  };
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(private wordPressService: WordPressService) {}

  ngOnInit(): void {
    this.loadTours();
  }

  loadTours(): void {
    // Hardcoded tours for now (as they are in tours-list)
    this.allTours = [
      {
        id: '1',
        title: 'Cape Town City & Culture',
        category: 'City',
        description: 'Explore the vibrant heart of Cape Town with guided heritage walks, local markets, and cultural experiences.',
        image: 'cape-town.jpg',
        price: 'From R1,500',
        duration: '1-3 days',
        highlights: ['City tours', 'Cultural immersion', 'Local cuisine'],
      },
      {
        id: '2',
        title: 'Garden Route Adventure',
        category: 'Scenic',
        description: 'Experience the stunning Garden Route with stops at Hermanus, Mossel Bay, and Knysna.',
        image: 'garden-route.jpg',
        price: 'From R2,500',
        duration: '3-5 days',
        highlights: ['Scenic drives', 'Wildlife viewing', 'Adventure activities'],
      },
      {
        id: '3',
        title: 'Safari & Wildlife',
        category: 'Wildlife',
        description: 'Encounter Africa\'s incredible wildlife in their natural habitat with expert guides.',
        image: 'safari.jpg',
        price: 'From R3,500',
        duration: '4-7 days',
        highlights: ['Game drives', 'Big Five', 'Photography'],
      },
      {
        id: '4',
        title: 'Winelands Tasting Tour',
        category: 'Food & Wine',
        description: 'Discover world-class wines in Stellenbosch and Franschhoek with cellar visits and tastings.',
        image: 'winelands.jpg',
        price: 'From R1,200',
        duration: '1-2 days',
        highlights: ['Wine tastings', 'Gourmet dining', 'Vineyard tours'],
      },
      {
        id: '5',
        title: 'Mountain Hiking Expeditions',
        category: 'Adventure',
        description: 'Challenge yourself with guided hikes through stunning mountain ranges and trails.',
        image: 'hiking.jpg',
        price: 'From R800',
        duration: '1-3 days',
        highlights: ['Hiking', 'Mountain views', 'Nature walks'],
      },
      {
        id: '6',
        title: 'Coastal Beach Retreat',
        category: 'Relaxation',
        description: 'Unwind on pristine beaches with water activities, fresh seafood, and coastal charm.',
        image: 'beach.jpg',
        price: 'From R1,000',
        duration: '2-4 days',
        highlights: ['Beach time', 'Water sports', 'Sunset views'],
      },
    ];
  }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onSubmit(): void {
    if (this.isSubmitting) return;

    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    // Simulate form submission - in real app, call backend API
    setTimeout(() => {
      this.successMessage = 'Message sent! We\'ll be in touch within 24 hours.';
      this.formData = { name: '', email: '', message: '' };
      this.isSubmitting = false;
    }, 1000);
  }
}
