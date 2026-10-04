import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

export interface WordPressPage {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  slug: string;
}

export interface WordPressPost {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  slug: string;
  date: string;
}

export interface WordPressMedia {
  id: number;
  source_url: string;
  alt_text: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class WordPressService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  /**
   * Get all pages
   */
  getPages(): Observable<WordPressPage[]> {
    return this.http.get<WordPressPage[]>(`${this.apiUrl}/pages?per_page=100`);
  }

  /**
   * Get a single page by slug
   */
  getPageBySlug(slug: string): Observable<WordPressPage> {
    return this.http.get<WordPressPage[]>(`${this.apiUrl}/pages?slug=${slug}`).pipe(
      map(pages => pages[0] || {})
    );
  }

  /**
   * Get all posts
   */
  getPosts(): Observable<WordPressPost[]> {
    return this.http.get<WordPressPost[]>(`${this.apiUrl}/posts?per_page=20`);
  }

  /**
   * Get a single post by ID
   */
  getPostById(id: number): Observable<WordPressPost> {
    return this.http.get<WordPressPost>(`${this.apiUrl}/posts/${id}`);
  }

  /**
   * Get featured image
   */
  getMediaById(id: number): Observable<WordPressMedia> {
    return this.http.get<WordPressMedia>(`${this.apiUrl}/media/${id}`);
  }

  /**
   * Get custom category or taxonomy posts
   */
  getPostsByCategory(categoryId: number): Observable<WordPressPost[]> {
    return this.http.get<WordPressPost[]>(
      `${this.apiUrl}/posts?categories=${categoryId}&per_page=20`
    );
  }

  /**
   * Submit contact form (sends to WordPress or custom endpoint)
   * This assumes you have set up a WordPress Contact Form 7 or custom endpoint
   */
  submitContactForm(data: ContactFormData): Observable<any> {
    const endpoint = `${this.apiUrl}/../contact-form`;
    return this.http.post(endpoint, data);
  }
}
