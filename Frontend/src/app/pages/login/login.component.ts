import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { WordPressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  template: `
    <section class="login-container">
      <div class="login-card">
        <h1>Login to Ndumo Tours</h1>
        <p class="subtitle">Access your bookings and travel itineraries</p>

        <form (ngSubmit)="onLogin()">
          <mat-form-field appearance="outline">
            <mat-label>Email</mat-label>
            <input
              matInput
              [(ngModel)]="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
            />
            <mat-icon matSuffix>mail</mat-icon>
          </mat-form-field>

          <mat-form-field appearance="outline">
            <mat-label>Password</mat-label>
            <input
              matInput
              [(ngModel)]="password"
              name="password"
              [type]="showPassword ? 'text' : 'password'"
              required
              placeholder="Enter your password"
            />
            <button
              mat-icon-button
              matSuffix
              (click)="showPassword = !showPassword"
              type="button"
            >
              <mat-icon>{{ showPassword ? 'visibility_off' : 'visibility' }}</mat-icon>
            </button>
          </mat-form-field>

          <button
            mat-raised-button
            color="primary"
            type="submit"
            [disabled]="!email || !password || isLoading"
          >
            {{ isLoading ? 'Logging in...' : 'Login' }}
          </button>
        </form>

        <div class="divider">Or</div>

        <button
          mat-stroked-button
          color="accent"
          (click)="contactWhatsApp()"
        >
          WhatsApp Support
        </button>

        <p class="signup-prompt">
          Don't have an account?
          <a href="https://wa.me/27631344422" target="_blank">Contact us to create one</a>
        </p>
      </div>
    </section>
  `,
  styles: [
    `
      .login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
        padding: 2rem;
        background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
      }

      .login-card {
        background: white;
        border-radius: 8px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        width: 100%;
        max-width: 400px;
      }

      h1 {
        text-align: center;
        color: #333;
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
      }

      .subtitle {
        text-align: center;
        color: #666;
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      mat-form-field {
        width: 100%;
      }

      button[type="submit"] {
        margin-top: 0.5rem;
        padding: 0.75rem;
        font-size: 1rem;
      }

      .divider {
        text-align: center;
        margin: 1rem 0;
        color: #999;
        font-size: 0.9rem;
      }

      [mat-stroked-button] {
        width: 100%;
      }

      .signup-prompt {
        text-align: center;
        margin-top: 1rem;
        color: #666;
        font-size: 0.9rem;
      }

      .signup-prompt a {
        color: #1976d2;
        text-decoration: none;
        font-weight: 500;
      }

      .signup-prompt a:hover {
        text-decoration: underline;
      }

      @media (max-width: 600px) {
        .login-container {
          min-height: 100vh;
          padding: 1rem;
        }

        .login-card {
          padding: 1.5rem;
        }

        h1 {
          font-size: 1.2rem;
        }
      }
    `,
  ],
})
export class LoginComponent {
  email = '';
  password = '';
  showPassword = false;
  isLoading = false;

  constructor(
    private wordpress: WordPressService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  async onLogin() {
    if (!this.email || !this.password) {
      this.snackBar.open('Please enter email and password', 'Close', { duration: 3000 });
      return;
    }

    this.isLoading = true;
    try {
      // Call login API
      const response = await this.wordpress.login(this.email, this.password);
      
      if (response.token) {
        localStorage.setItem('authToken', response.token);
        this.snackBar.open('Login successful!', 'Close', { duration: 2000 });
        this.router.navigate(['/']);
      }
    } catch (error: any) {
      this.snackBar.open(error.message || 'Login failed. Please try again.', 'Close', { duration: 3000 });
    } finally {
      this.isLoading = false;
    }
  }

  contactWhatsApp() {
    window.open('https://wa.me/27631344422', '_blank');
  }
}
