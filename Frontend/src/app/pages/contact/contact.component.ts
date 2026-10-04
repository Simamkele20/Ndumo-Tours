import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WordPressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-hero">
      <div class="container">
        <h1>Contact Ndumo</h1>
        <p class="hero-subtitle">Let's start a conversation about your next adventure</p>
      </div>
    </div>

    <section class="contact-section">
      <div class="container">
        <div class="contact-info-grid">
          <div class="info-card">
            <h3>EMAIL</h3>
            <a href="mailto:info@ndumotours.com">info&#64;ndumotours.com</a>
          </div>
          <div class="info-card">
            <h3>PHONE NUMBER</h3>
            <a href="https://wa.me/27631344422" target="_blank">+27631344422</a>
          </div>
          <div class="info-card">
            <h3>LOCATION</h3>
            <p>Plumstead, Cape Town, South Africa</p>
          </div>
        </div>

        <div class="contact-form-section">
          <h2>Let's get in touch</h2>
          <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
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
                [disabled]="isSubmitting">
            </div>
            <div class="form-group">
              <label for="email">Email Address *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                [(ngModel)]="formData.email"
                required
                [disabled]="isSubmitting">
            </div>
            <div class="form-group">
              <label for="message">Your Message *</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                [(ngModel)]="formData.message"
                required
                [disabled]="isSubmitting"></textarea>
            </div>
            <button 
              type="submit" 
              class="btn btn-primary"
              [disabled]="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
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
    .contact-hero,
    .contact-section,
    .shuttle-section {
      width: 100%;
    }

    /* Hero Section */
    .contact-hero {
      background: linear-gradient(135deg, #1a5f3d 0%, #2e8b57 100%);
      background-image: url('/assets/images/9.jpg');
      background-size: cover;
      background-position: center;
      color: white;
      padding: 6rem 2rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      min-height: 450px;
    }

    .contact-hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.55);
      z-index: 1;
    }

    .contact-hero .container {
      position: relative;
      z-index: 2;
    }

    .contact-hero h1 {
      font-size: 3rem;
      margin: 0 0 1rem 0;
      font-weight: 700;
      color: white;
    }

    .contact-hero .hero-subtitle {
      font-size: 1.3rem;
      margin: 0;
      color: white;
      opacity: 0.95;
      font-weight: 400;
    }

    /* Contact Section */
    .contact-section {
      padding: 4rem 0;
      background: #f9f9f9;
    }

    .contact-info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .info-card {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    .info-card h3 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: #1a5f3d;
    }

    .info-card a {
      color: #1a5f3d;
      font-weight: 600;
      transition: color 0.3s ease;
    }

    .info-card a:hover {
      color: #2e8b57;
    }

    /* Contact Form */
    .contact-form-section {
      background: white;
      padding: 3rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      max-width: 600px;
      margin: 0 auto;
    }

    .contact-form-section h2 {
      margin-top: 0;
      color: #1a5f3d;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: #333;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #1a5f3d;
      box-shadow: 0 0 0 3px rgba(26, 95, 61, 0.1);
    }

    .form-group input:disabled,
    .form-group textarea:disabled {
      background-color: #f5f5f5;
      cursor: not-allowed;
    }

    /* Alerts */
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

    /* Button */
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
      background-color: #1a5f3d;
      color: white;
      width: 100%;
    }

    .btn-primary:hover:not(:disabled) {
      background-color: #2e8b57;
    }

    .btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .btn-secondary {
      background-color: #FFB81C;
      color: #333;
    }

    .btn-secondary:hover {
      background-color: #e6a81a;
    }

    @media (max-width: 768px) {
      .contact-hero h1 {
        font-size: 2rem;
      }

      .contact-form-section {
        padding: 1.5rem;
      }

      .contact-info-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(private wordPressService: WordPressService) {}

  onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    // For now, send an email via a backend or use a service like EmailJS
    // This is a placeholder - you'll need to implement the backend endpoint
    this.wordPressService.submitContactForm(this.formData).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.successMessage = 'Your message has been sent successfully! We will be in touch soon.';
        this.formData = { name: '', email: '', message: '' };
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          this.successMessage = '';
        }, 5000);
      },
      error: (error) => {
        this.isSubmitting = false;
        console.error('Error submitting form:', error);
        
        // Fallback: suggest WhatsApp or email
        this.errorMessage = 'Unable to send message at the moment. Please contact us directly at info@ndumotours.com or WhatsApp: +27631344422';
      }
    });
  }
}
