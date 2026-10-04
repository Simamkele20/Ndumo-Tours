import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="services-hero">
      <div class="container">
        <h1>Experiences Built Around You</h1>
        <p>We do not work from a catalogue. You tell us what you are looking for and we design the experience around you. Whether it is a half day in the city or a two week journey across Southern Africa, the starting point is always the same… a conversation.</p>
        <a href="https://wa.me/27631344422" target="_blank" class="btn btn-primary">Need transport? Click here!</a>
      </div>
    </div>

    <!-- How Ndumo Works Section -->
    <section class="how-we-work">
      <div class="container">
        <h2>How Ndumo works</h2>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">Step 1</div>
            <h3>Tell Us What You Want</h3>
            <p>Use the form below or message us on WhatsApp. Tell us roughly what you have in mind: the experience, the dates, the number of people.</p>
            <a href="https://wa.me/27631344422" target="_blank" class="btn btn-secondary">Plan a Trip</a>
            <img src="/assets/images/5-1024x576.jpg" alt="Plan a Trip">
          </div>
          <div class="step-card">
            <div class="step-number">Step 2</div>
            <h3>We Design It Together</h3>
            <p>We come back to you with a suggested itinerary. We refine it until it is exactly right.</p>
            <a href="https://wa.me/27631344422" target="_blank" class="btn btn-secondary">Design a Tour</a>
            <img src="/assets/images/11-e1773759659170.jpg" alt="Design a Tour">
          </div>
          <div class="step-card">
            <div class="step-number">Step 3</div>
            <h3>We Guide You</h3>
            <p>On the day, we take care of everything. You simply show up and experience it.</p>
            <a href="https://wa.me/27631344422" target="_blank" class="btn btn-secondary">Be Guided</a>
            <img src="/assets/images/Crop860x650.jpeg" alt="We Guide You">
          </div>
        </div>
      </div>
    </section>

    <!-- Premium Shuttle Section -->
    <section class="shuttle-section">
      <div class="container">
        <div class="shuttle-content">
          <h2>Premium Shuttle Hire</h2>
          <h3>Your journey taken in luxury</h3>
          <p class="shuttle-info">We do not publish fixed rates because we do not offer fixed experiences. Chat to us to build yours.</p>
          <ul class="shuttle-list">
            <li>Airport & Hotel Transfers</li>
            <li>Corporate Events</li>
            <li>Road Trips</li>
            <li>Day Outings</li>
          </ul>
          <p class="shuttle-note">Get a journey route & quote by contacting us</p>
          <a routerLink="/contact" class="btn btn-secondary">Contact Us</a>
        </div>
      </div>
    </section>

    <!-- Why Ndumo Tours Section -->
    <section class="why-ndumo">
      <div class="container">
        <h2>Why Ndumo Tours</h2>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">8</div>
            <div class="stat-label">Years Experience</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">5</div>
            <div class="stat-label">Star Rating</div>
          </div>
          <div class="stat-card">
            <i class="bi bi-chat-dots stat-icon"></i>
            <div class="stat-label">Fast Communications</div>
          </div>
          <div class="stat-card">
            <i class="bi bi-headset stat-icon"></i>
            <div class="stat-label">Dedicated Support</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
      width: 100%;
    }

    /* Full Width Sections */
    .services-hero,
    .how-we-work,
    .shuttle-section,
    .why-ndumo {
      width: 100%;
    }

    .btn {
      display: inline-block;
      padding: 1rem 2.5rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
      font-size: 1.05rem;
    }

    .btn-primary {
      background-color: #FFB81C;
      color: #333;
    }

    .btn-primary:hover {
      background-color: #FFC94D;
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(255, 184, 28, 0.35);
    }

    .btn-secondary {
      background-color: transparent;
      color: #1a5f3d;
      border: 2px solid #1a5f3d;
    }

    .btn-secondary:hover {
      background-color: #1a5f3d;
      color: white;
      transform: translateY(-3px);
    }

    /* Hero Section */
    .services-hero {
      background: linear-gradient(135deg, #1a5f3d 0%, #2e8b57 100%);
      background-image: url('/assets/images/Services.jpg');
      background-size: cover;
      background-position: center;
      color: white;
      padding: 7rem 2rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      min-height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .services-hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.45);
      z-index: 1;
    }

    .services-hero h1 {
      font-size: 3rem;
      margin: 0 0 1.5rem 0;
      position: relative;
      z-index: 2;
      font-weight: 700;
      letter-spacing: -0.5px;
      color: white;
    }

    .services-hero p {
      font-size: 1.25rem;
      margin: 0 0 2.5rem 0;
      position: relative;
      z-index: 2;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.8;
      font-weight: 500;
    }

    .services-hero .btn {
      position: relative;
      z-index: 2;
    }

    .services-hero .container {
      position: relative;
      z-index: 2;
    }

    /* How We Work Section */
    .how-we-work {
      padding: 6rem 0;
      background-color: white;
    }

    .how-we-work .container {
      max-width: 1400px;
    }

    .how-we-work h2 {
      text-align: center;
      font-size: 2.8rem;
      color: #1a5f3d;
      margin-bottom: 4rem;
      font-weight: 700;
      letter-spacing: -0.5px;
    }

    .steps-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
      margin-bottom: 2rem;
    }

    .step-card {
      background: white;
      padding: 2.5rem;
      border-radius: 16px;
      text-align: center;
      box-shadow: 0 4px 15px rgba(0,0,0,0.08);
      transition: all 0.4s ease;
      border: 1px solid #f0f0f0;
      display: flex;
      flex-direction: column;
    }

    .step-card:hover {
      transform: translateY(-12px);
      box-shadow: 0 16px 40px rgba(26, 95, 61, 0.15);
    }

    .step-number {
      font-size: 0.9rem;
      font-weight: 700;
      color: #FFB81C;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 1rem;
    }

    .step-card h3 {
      color: #1a5f3d;
      font-size: 1.5rem;
      margin: 0 0 1rem 0;
      font-weight: 700;
      line-height: 1.4;
    }

    .step-card p {
      color: #555;
      line-height: 1.8;
      margin: 0 0 1.8rem 0;
      font-size: 0.95rem;
      flex-grow: 1;
    }

    .step-card .btn {
      margin-bottom: 1.5rem;
    }

    .step-card img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 12px;
      margin-top: 0;
    }

    /* Premium Shuttle Section */
    .shuttle-section {
      padding: 6rem 0;
      background: linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%);
      text-align: center;
    }

    .shuttle-gallery {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      margin: 0 0 3rem 0;
      max-width: 1000px;
      margin-left: auto;
      margin-right: auto;
    }

    .shuttle-gallery img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 16px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .shuttle-gallery img:hover {
      transform: scale(1.05);
    }

    .shuttle-section h2 {
      font-size: 2.4rem;
      color: #1a5f3d;
      margin: 0 0 0.75rem 0;
      font-weight: 700;
      letter-spacing: -0.3px;
    }

    .shuttle-section h3 {
      font-size: 1.35rem;
      color: #666;
      margin: 0 0 2rem 0;
      font-weight: 500;
    }

    .shuttle-list {
      list-style: none;
      padding: 0;
      margin: 0 0 2rem 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .shuttle-list li {
      padding: 0 0 0 2rem;
      color: #555;
      padding-left: 2.5rem;
      position: relative;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.6;
    }

    .shuttle-list li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #FFB81C;
      font-weight: bold;
      font-size: 1.2rem;
    }

    .shuttle-note {
      font-size: 1rem;
      color: #888;
      margin: 1.5rem 0 2rem 0;
      font-weight: 500;
    }

    .shuttle-section .btn {
      padding: 1rem 2.5rem;
      display: inline-block;
    }

    /* Why Ndumo Tours Section */
    .why-ndumo {
      background: linear-gradient(135deg, #1a5f3d 0%, #2e8b57 100%);
      color: white;
      padding: 6rem 2rem;
      text-align: center;
    }

    .why-ndumo h2 {
      font-size: 2.8rem;
      margin-bottom: 4rem;
      color: white;
      font-weight: 700;
      letter-spacing: -0.5px;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .stat-card {
      padding: 2.5rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      border: 2px solid rgba(255, 255, 255, 0.15);
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }

    .stat-card:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-8px);
    }

    .stat-number {
      font-size: 3.5rem;
      font-weight: 700;
      color: #FFB81C;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      font-size: 1.15rem;
      color: white;
      line-height: 1.5;
      font-weight: 500;
    }

    .stat-icon {
      font-size: 3rem;
      color: #FFB81C;
      margin-bottom: 1rem;
      display: inline-block;
    }

    /* Tablet Responsive */
    @media (max-width: 1024px) {
      .container {
        padding: 0 1.5rem;
      }

      .services-hero {
        padding: 5rem 1.5rem;
        min-height: auto;
      }

      .services-hero h1 {
        font-size: 2.2rem;
      }

      .services-hero p {
        font-size: 1.1rem;
      }

      .how-we-work {
        padding: 5rem 0;
      }

      .how-we-work h2 {
        font-size: 2.2rem;
        margin-bottom: 3rem;
      }

      .steps-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2.5rem;
      }

      .shuttle-list {
        grid-template-columns: 1fr;
      }

      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }

      .why-ndumo h2 {
        font-size: 2.2rem;
        margin-bottom: 3rem;
      }

      .stat-number {
        font-size: 2.5rem;
      }
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
      .container {
        padding: 0 1rem;
      }

      .btn {
        padding: 0.9rem 2rem;
        font-size: 1rem;
      }

      .services-hero {
        padding: 3.5rem 1rem;
        min-height: auto;
      }

      .services-hero h1 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }

      .services-hero p {
        font-size: 1rem;
        margin-bottom: 1.5rem;
      }

      .how-we-work {
        padding: 3.5rem 0;
      }

      .how-we-work h2 {
        font-size: 1.8rem;
        margin-bottom: 2.5rem;
      }

      .steps-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .step-card {
        padding: 2rem;
      }

      .step-card h3 {
        font-size: 1.3rem;
      }

      .step-card p {
        font-size: 0.9rem;
      }

      .step-card img {
        height: 240px;
      }

      .shuttle-section {
        padding: 3.5rem 0;
      }

      .shuttle-section h2 {
        font-size: 1.8rem;
      }

      .shuttle-section h3 {
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
      }

      .shuttle-list {
        margin-bottom: 1.5rem;
      }

      .shuttle-list li {
        font-size: 0.95rem;
      }

      .shuttle-note {
        font-size: 0.9rem;
        margin: 1rem 0 1.5rem 0;
      }

      .shuttle-gallery {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        margin: 0 0 2.5rem 0;
      }

      .shuttle-gallery img {
        height: 250px;
      }

      .why-ndumo {
        padding: 3.5rem 1rem;
      }

      .why-ndumo h2 {
        font-size: 1.8rem;
        margin-bottom: 2.5rem;
      }

      .stats-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .stat-card {
        padding: 1.8rem;
      }

      .stat-number {
        font-size: 2rem;
      }

      .stat-label {
        font-size: 1rem;
      }
    }
  `]
})
export class ToursComponent {}
