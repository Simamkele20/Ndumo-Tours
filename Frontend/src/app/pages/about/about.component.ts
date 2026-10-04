import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-hero">
      <div class="container">
        <h1>More Than a Tour Company</h1>
        <p>We are a small, people-first travel business rooted in Cape Town and passionate about Southern Africa.</p>
        <p class="tagline">Every journey we build is personal, considered, and guided by someone who genuinely loves this land.</p>
      </div>
    </div>

    <section class="about-content">
      <div class="container">
        <div class="about-story">
          <div>
            <h2>Ndumo</h2>
            <p>Ndumo is a Nguni word. It means Honour. Reputation. Esteem. Prominence. This business was named in honour of our founder's late father, a man whose life embodied everything that word represents. The name is not a logo. It is a standard. One we carry into every trip we plan, every client we meet, and every experience we build. When you travel with Ndumo, you travel with that intention behind you.</p>
          </div>
          <img src="https://ndumotours.com/wp-content/uploads/2026/03/3-1024x576.jpg" alt="Ndumo Story" class="story-image">
        </div>

        <div class="how-we-work-section">
          <h2>How we work</h2>
          <ul class="work-list">
            <li>We do not sell packages.</li>
            <li>We have conversations.</li>
            <li>Every client comes to us with something different: a first-time safari, a family reunion, a solo adventure, a corporate team in need of something meaningful.</li>
            <li>We listen to what that is before we plan a single thing.</li>
            <li>From there, we design an experience that fits your group, your timeline, and your interests.</li>
            <li>We handle the logistics, the local knowledge, and the on-the-ground guidance. You handle the arrival.</li>
            <li>We operate across Cape Town and throughout Southern Africa.</li>
            <li>We work with a trusted network of local guides, accommodation partners, and experience providers who share our values.</li>
          </ul>
          <a href="https://wa.me/27631344422" target="_blank" class="btn btn-primary">Whatsapp Us</a>
        </div>

        <div class="values-section">
          <h2>Our Values</h2>
          <div class="values-grid">
            <div class="value-item">
              <h3>Honour</h3>
              <p>We carry our name's meaning into every interaction. With clients, with partners, and with the places we visit. We do not cut corners. We show up with integrity.</p>
            </div>
            <div class="value-item">
              <h3>Listening</h3>
              <p>Before we plan anything, we hear the person in front of us. Your needs, your concerns, your hopes. The itinerary comes after the conversation.</p>
            </div>
            <div class="value-item">
              <h3>Authenticity</h3>
              <p>We share Southern Africa honestly. Its beauty, its history, its complexity. We do not package it for consumption. We introduce you to it.</p>
            </div>
            <div class="value-item">
              <h3>Connection</h3>
              <p>We believe the best travel reveals how much we have in common. Across cultures, histories, and landscapes. We design for that discovery.</p>
            </div>
            <div class="value-item">
              <h3>Care</h3>
              <p>We move through the world carefully. For local communities, for wildlife, for the environment. Good travel and responsible travel are not in conflict.</p>
            </div>
          </div>
        </div>

        <div class="cta-section">
          <h2>Ready to plan something worth remembering?</h2>
          <a href="mailto:info@ndumotours.com" class="btn btn-primary">Email Us</a>
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
    .about-hero,
    .story-section,
    .values-section,
    .how-we-work-section,
    .team-section,
    .cta-section {
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
      box-shadow: 0 6px 20px rgba(255, 184, 28, 0.35);
    }

    /* Hero Section */
    .about-hero {
      background: linear-gradient(135deg, #1a5f3d 0%, #2e8b57 100%);
      background-image: url('/assets/images/michael-schofield-IhuzPxyBunQ-unsplash-scaled.jpg');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      color: white;
      padding: 6rem 2rem;
      text-align: center;
      position: relative;
      min-height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .about-hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.45);
      z-index: 1;
    }

    .about-hero .container {
      position: relative;
      z-index: 2;
    }

    .about-hero h1 {
      font-size: 2.8rem;
      margin: 0 0 1.5rem 0;
      font-weight: 700;
      letter-spacing: -0.5px;
      color: white;
    }

    .about-hero p {
      font-size: 1.2rem;
      margin: 0.8rem 0;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.8;
      font-weight: 500;
    }

    .about-hero .tagline {
      font-style: italic;
      opacity: 0.95;
      font-size: 1.15rem;
      margin-top: 1rem;
    }

    /* Content Section */
    .about-content {
      padding: 6rem 0;
    }

    .about-story {
      display: flex;
      gap: 3rem;
      align-items: flex-start;
      margin-bottom: 5rem;
      padding-bottom: 5rem;
      border-bottom: 1px solid #e5e5e5;
    }

    .about-story > div:first-child {
      flex: 1;
      min-width: 0;
    }

    .about-story h2 {
      font-size: 2.4rem;
      color: #1a5f3d;
      margin: 0 0 1.8rem 0;
      font-weight: 700;
      letter-spacing: -0.3px;
    }

    .about-story p {
      font-size: 1.05rem;
      line-height: 1.9;
      color: #555;
      margin: 0 0 2rem 0;
      max-width: 900px;
    }

    .story-image {
      flex: 1;
      min-width: 300px;
      max-width: 500px;
      border-radius: 12px;
      margin: 0;
      display: block;
      box-shadow: 0 8px 25px rgba(0,0,0,0.12);
    }

    /* How We Work Section */
    .how-we-work-section {
      margin-bottom: 5rem;
      padding-bottom: 5rem;
      border-bottom: 1px solid #e5e5e5;
      text-align: center;
    }

    .how-we-work-section h2 {
      font-size: 2.4rem;
      color: #1a5f3d;
      margin: 0 0 2.5rem 0;
      font-weight: 700;
      letter-spacing: -0.3px;
    }

    .work-list {
      list-style: none;
      padding: 0;
      margin: 0 0 2.5rem 0;
      display: inline-block;
      text-align: left;
    }

    .work-list li {
      padding: 1rem 0 1rem 2rem;
      color: #555;
      line-height: 1.8;
      font-size: 1rem;
      position: relative;
      font-weight: 500;
    }

    .work-list li:before {
      content: "→";
      position: absolute;
      left: 0;
      color: #FFB81C;
      font-weight: bold;
      font-size: 1.2rem;
    }

    /* Values Section */
    .values-section {
      margin-bottom: 5rem;
    }

    .values-section h2 {
      font-size: 2.4rem;
      color: #1a5f3d;
      margin: 0 0 3rem 0;
      text-align: center;
      font-weight: 700;
      letter-spacing: -0.3px;
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2.5rem;
      margin-bottom: 3rem;
    }

    .value-item {
      background: white;
      padding: 2.5rem;
      border-radius: 16px;
      border-left: 5px solid #FFB81C;
      box-shadow: 0 4px 15px rgba(0,0,0,0.06);
      transition: all 0.3s ease;
    }

    .value-item:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 30px rgba(0,0,0,0.1);
    }

    .value-item h3 {
      color: #1a5f3d;
      font-size: 1.4rem;
      margin: 0 0 1rem 0;
      font-weight: 700;
    }

    .value-item p {
      color: #666;
      line-height: 1.7;
      margin: 0;
      font-size: 0.98rem;
    }

    /* CTA Section */
    .cta-section {
      background: linear-gradient(135deg, #1a5f3d 0%, #2e8b57 100%);
      color: white;
      padding: 4rem 3rem;
      border-radius: 16px;
      text-align: center;
      box-shadow: 0 8px 25px rgba(26,95,61,0.2);
    }

    .cta-section h2 {
      color: white;
      font-size: 2.2rem;
      margin: 0 0 2rem 0;
      font-weight: 700;
      letter-spacing: -0.3px;
    }

    /* Tablet Responsive */
    @media (max-width: 1024px) {
      .container {
        padding: 0 1.5rem;
      }

      .about-hero {
        padding: 5rem 1.5rem;
      }

      .about-hero h1 {
        font-size: 2.2rem;
        margin-bottom: 1rem;
      }

      .about-hero p {
        font-size: 1.1rem;
      }

      .about-content {
        padding: 4rem 0;
      }

      .about-story,
      .how-we-work-section {
        margin-bottom: 3.5rem;
        padding-bottom: 3.5rem;
      }

      .about-story h2,
      .how-we-work-section h2,
      .values-section h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
      }

      .values-grid {
        gap: 2rem;
      }

      .cta-section {
        padding: 3rem 2rem;
      }

      .cta-section h2 {
        font-size: 1.8rem;
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

      .about-hero {
        padding: 3.5rem 1rem;
      }

      .about-hero h1 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }

      .about-hero p {
        font-size: 1rem;
      }

      .about-content {
        padding: 3rem 0;
      }

      .about-story,
      .how-we-work-section {
        margin-bottom: 2.5rem;
        padding-bottom: 2.5rem;
        flex-direction: column;
        gap: 2rem;
      }

      .story-image {
        max-width: 100%;
        min-width: auto;
      }

      .about-story h2,
      .how-we-work-section h2,
      .values-section h2 {
        font-size: 1.6rem;
        margin-bottom: 1.5rem;
      }

      .about-story p,
      .work-list li {
        font-size: 0.95rem;
        line-height: 1.7;
      }

      .story-image {
        border-radius: 10px;
        margin-top: 1.5rem;
      }

      .values-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .value-item {
        padding: 2rem;
        border-left-width: 4px;
      }

      .value-item h3 {
        font-size: 1.2rem;
      }

      .value-item p {
        font-size: 0.9rem;
      }

      .cta-section {
        padding: 2.5rem 1.5rem;
      }

      .cta-section h2 {
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
      }
    }
  `]
})
export class AboutComponent {}
