import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
  ],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <!-- Mobile Sidenav -->
      <mat-sidenav
        #sidenav
        mode="side"
        [opened]="false"
        class="sidenav"
        (keydown.escape)="sidenav.close()"
      >
        <mat-nav-list class="sidenav-nav">
          <mat-list-item
            *ngFor="let link of navLinks"
            routerLink="{{ link.route }}"
            (click)="sidenav.close()"
          >
            <span matListItemTitle>{{ link.label }}</span>
          </mat-list-item>
          <mat-divider></mat-divider>
          <mat-list-item>
            <a
              href="https://wa.me/27631344422"
              target="_blank"
              rel="noopener noreferrer"
              class="whatsapp-link"
            >
              <span matListItemTitle>WhatsApp Us</span>
            </a>
          </mat-list-item>
        </mat-nav-list>
      </mat-sidenav>

      <!-- Main Content -->
      <mat-sidenav-content>
        <!-- Toolbar (Navigation) -->
        <mat-toolbar class="app-toolbar" [class.scrolled]="isScrolled">
          <div class="toolbar-content">
            <a routerLink="/" class="logo-link">
              <img
                src="assets/images/cropped-Green-Ndumo-300x300.png"
                alt="Ndumo Tours"
                class="logo-image"
              />
              <span class="logo-text">Ndumo Tours</span>
            </a>

            <!-- Desktop Navigation -->
            <nav class="desktop-nav">
              <a
                *ngFor="let link of navLinks"
                [routerLink]="link.route"
                class="nav-link"
              >
                {{ link.label }}
              </a>
            </nav>

            <!-- CTA Button & Mobile Menu -->
            <div class="toolbar-actions">
              <a
                routerLink="/login"
                mat-raised-button
                color="accent"
                class="cta-button"
              >
                Login
              </a>
              <button
                mat-icon-button
                (click)="sidenav.toggle()"
                class="menu-button"
              >
                ☰
              </button>
            </div>
          </div>
        </mat-toolbar>

        <!-- Page Content -->
        <main class="main-content">
          <router-outlet></router-outlet>
        </main>

        <!-- Footer -->
        <footer class="app-footer">
          <div class="footer-content">
            <div class="footer-grid">
              <!-- About Section -->
              <div class="footer-section">
                <h3>About Ndumo Tours</h3>
                <p>
                  Experience the beauty of Southern Africa with authentic, locally-guided
                  tours designed just for you.
                </p>
              </div>

              <!-- Quick Links -->
              <div class="footer-section">
                <h3>Quick Links</h3>
                <ul class="footer-links">
                  <li><a routerLink="/">Home</a></li>
                  <li><a routerLink="/tours">Tours</a></li>
                  <li><a routerLink="/services">Services</a></li>
                  <li><a routerLink="/about">About</a></li>
                  <li><a routerLink="/contact">Contact</a></li>
                </ul>
              </div>

              <!-- Contact Info -->
              <div class="footer-section">
                <h3>Contact Us</h3>
                <p>Email: <a href="mailto:info&#64;ndumotours.com">info&#64;ndumotours.com</a></p>
                <p>
                  WhatsApp:
                  <a href="https://wa.me/27631344422" target="_blank">+27 63 134 4422</a>
                </p>
                <p>South Africa</p>
              </div>

              <!-- Newsletter -->
              <div class="footer-section">
                <h3>Stay Updated</h3>
                <p>Subscribe to our newsletter for travel tips and exclusive offers.</p>
                <form class="newsletter-form" (ngSubmit)="subscribeNewsletter()">
                  <input
                    type="email"
                    placeholder="Your email"
                    [(ngModel)]="newsletterEmail"
                    name="email"
                    required
                  />
                  <button type="submit" mat-mini-fab color="accent">
                    →
                  </button>
                </form>
              </div>
            </div>

            <!-- Copyright -->
            <div class="footer-bottom">
              <p>&copy; 2026 Ndumo Tours. All rights reserved.</p>
              <div class="social-links">
                <a href="#" mat-icon-button>f</a>
                <a href="#" mat-icon-button>⤴</a>
                <a href="#" mat-icon-button>🌐</a>
              </div>
            </div>
          </div>
        </footer>

        <!-- Cookie Consent -->
        <div class="cookie-consent" *ngIf="showCookieConsent">
          <div class="cookie-container">
            <h3>We Value Your Privacy</h3>
            <p>
              We use cookies to enhance your browsing experience, personalize content, and
              analyze our traffic. By accepting, you help us improve your journey with us.
            </p>
            <div class="cookie-actions">
              <button mat-stroked-button (click)="rejectCookies()">Reject</button>
              <button mat-raised-button color="primary" (click)="acceptCookies()">
                Accept
              </button>
            </div>
          </div>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      .sidenav-container {
        height: 100%;
        display: flex;
        width: 100%;
        overflow-x: hidden;
      }

      .sidenav {
        width: 250px;
      }

      .sidenav-nav {
        padding-top: 1rem;
      }

      mat-sidenav-content {
        display: flex !important;
        flex-direction: column;
        flex: 1;
        width: 100%;
      }

      .whatsapp-link {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: inherit;
      }

      /* Toolbar Styles */
      .app-toolbar {
        background: linear-gradient(135deg, #1a5f3d 0%, #2d7a52 100%);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        position: sticky;
        top: 0;
        z-index: 100;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        width: 100%;
        padding: 0 !important;
        height: auto !important;
        min-height: 64px;
      }

      .app-toolbar.scrolled {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
      }

      .toolbar-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 100%;
        padding: 0 2rem;
        gap: 2rem;
      }

      .logo-link {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        text-decoration: none;
        flex-shrink: 0;
      }

      .logo-image {
        width: 50px;
        height: 50px;
        border-radius: 4px;
      }

      .logo-text {
        font-size: 1.25rem;
        font-weight: 700;
        color: white;
        letter-spacing: 1px;
        text-transform: uppercase;
      }

      /* Desktop Navigation */
      .desktop-nav {
        display: flex;
        gap: 2rem;
        flex: 1;
        justify-content: center;
      }

      .nav-link {
        color: rgba(255, 255, 255, 0.9);
        text-decoration: none;
        font-weight: 500;
        font-size: 0.95rem;
        transition: color 0.3s ease;
        position: relative;
        padding: 0.5rem 0;
      }

      .nav-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #c9a961;
        transition: width 0.3s ease;
      }

      .nav-link:hover {
        color: white;
      }

      .nav-link:hover::after {
        width: 100%;
      }

      /* Toolbar Actions */
      .toolbar-actions {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .cta-button {
        background-color: #c9a961 !important;
        color: white !important;
        font-weight: 600;
        padding: 0.75rem 1.5rem !important;
        border-radius: 4px !important;
        height: auto !important;
        min-height: 40px;
        display: flex !important;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
      }

      .cta-button:hover {
        background-color: #e0c084 !important;
        transform: translateY(-2px);
        box-shadow: 0 8px 16px rgba(201, 169, 97, 0.3) !important;
      }

      .menu-button {
        display: none;
        color: white;
      }

      /* Main Content */
      .main-content {
        flex: 1;
        width: 100%;
      }

      /* Footer Styles */
      .app-footer {
        background-color: #1a1a1a;
        color: white;
        padding: 4rem 0 2rem;
        margin-top: auto;
        width: 100%;
      }

      .footer-content {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;
        width: 100%;
      }

      .footer-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
      }

      .footer-section h3 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #c9a961;
      }

      .footer-section p {
        font-size: 0.9rem;
        color: #ccc;
        margin-bottom: 0.5rem;
      }

      .footer-section a {
        color: #ccc;
        text-decoration: none;
        transition: color 0.3s ease;
      }

      .footer-section a:hover {
        color: #c9a961;
      }

      .footer-links {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .footer-links li {
        margin-bottom: 0.5rem;
      }

      .newsletter-form {
        display: flex;
        gap: 0.5rem;
        margin-top: 1rem;
      }

      .newsletter-form button {
        background-color: #c9a961 !important;
        color: white !important;
      }

      .newsletter-form button:hover {
        background-color: #e0c084 !important;
      }

      .newsletter-form input {
        flex: 1;
        padding: 0.75rem;
        border: none;
        border-radius: 4px;
        font-size: 0.9rem;
        background-color: #333;
        color: white;
      }

      .newsletter-form input::placeholder {
        color: #999;
      }

      .footer-bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #333;
        padding-top: 2rem;
        flex-wrap: wrap;
        gap: 1rem;
        flex-direction: column;
      }

      .footer-bottom p {
        font-size: 0.85rem;
        color: #999;
        margin: 0;
        text-align: center;
      }

      .social-links {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
      }

      .social-links a {
        color: #999;
        transition: color 0.3s ease;
      }

      .social-links a:hover {
        color: #c9a961;
      }

      /* Cookie Consent */
      .cookie-consent {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #1a1a1a;
        border-top: 2px solid #c9a961;
        z-index: 1000;
        animation: slideUp 0.3s ease-out;
      }

      @keyframes slideUp {
        from {
          transform: translateY(100%);
        }
        to {
          transform: translateY(0);
        }
      }

      .cookie-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        flex-wrap: wrap;
      }

      .cookie-container h3 {
        margin: 0 0 0.5rem 0;
        color: white;
        font-size: 1rem;
      }

      .cookie-container p {
        margin: 0;
        color: #ccc;
        font-size: 0.9rem;
        flex: 1;
        min-width: 300px;
      }

      .cookie-actions {
        display: flex;
        gap: 1rem;
        flex-shrink: 0;
      }

      /* Responsive Design */
      @media (max-width: 1024px) {
        .desktop-nav {
          display: none;
        }

        .menu-button {
          display: block;
        }

        .toolbar-content {
          gap: 0.5rem;
          padding: 0 1rem;
        }

        .cta-button {
          padding: 0.7rem 1.2rem !important;
          font-size: 0.9rem;
        }
      }

      @media (max-width: 768px) {
        .toolbar-content {
          padding: 0 0.75rem;
          gap: 0.5rem;
        }

        .logo-link {
          gap: 0.5rem;
        }

        .logo-image {
          width: 40px;
          height: 40px;
        }

        .logo-text {
          display: none;
        }

        .cta-button {
          padding: 0.6rem 1rem !important;
          font-size: 0.85rem;
          min-height: 36px;
        }

        .menu-button {
          width: 40px;
          height: 40px;
          font-size: 1.2rem;
        }

        .footer-grid {
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .footer-content {
          padding: 0 1rem;
        }

        .footer-section h3 {
          font-size: 0.95rem;
        }

        .footer-section p {
          font-size: 0.85rem;
        }

        .footer-bottom {
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .footer-bottom p {
          font-size: 0.8rem;
        }

        .cookie-container {
          flex-direction: column;
          align-items: flex-start;
          padding: 1rem;
          gap: 1rem;
        }

        .cookie-container h3 {
          font-size: 0.9rem;
        }

        .cookie-container p {
          font-size: 0.8rem;
          min-width: auto;
        }

        .cookie-actions {
          width: 100%;
          flex-direction: column;
        }

        .cookie-actions button {
          width: 100%;
        }
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  isScrolled = false;
  showCookieConsent = true;
  newsletterEmail = '';

  navLinks = [
    { label: 'Home', route: '/', icon: 'home' },
    { label: 'Tours', route: '/tours', icon: 'map' },
    { label: 'Services', route: '/services', icon: 'room_service' },
    { label: 'About', route: '/about', icon: 'info' },
    { label: 'Contact', route: '/contact', icon: 'mail' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.setupScrollListener();
    this.checkCookieConsent();
  }

  private setupScrollListener(): void {
    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 10;
    });
  }

  private checkCookieConsent(): void {
    const cookieConsent = localStorage.getItem('ndumo-cookie-consent');
    if (cookieConsent) {
      this.showCookieConsent = false;
    }
  }

  acceptCookies(): void {
    localStorage.setItem('ndumo-cookie-consent', 'accepted');
    this.showCookieConsent = false;
  }

  rejectCookies(): void {
    localStorage.setItem('ndumo-cookie-consent', 'rejected');
    this.showCookieConsent = false;
  }

  subscribeNewsletter(): void {
    if (this.newsletterEmail) {
      console.log('Newsletter subscription:', this.newsletterEmail);
      this.newsletterEmail = '';
      // TODO: Integrate with WordPress newsletter service
    }
  }
}
