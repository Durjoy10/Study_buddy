import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container">
      <section class="intro-section">
        <h2>Empowering Students Through Digital Collaboration</h2>
        <p>Study Buddy is designed to revolutionize how university students access and share academic resources. Our platform brings together course materials, peer discussions, and academic tools in one convenient location.</p>
      </section>

      <div class="features">
        <div class="feature-card">
          <h3>PDF Resource Library</h3>
          <p>Access and share class notes, slides, and previous exam questions organized by course and semester.</p>
          <ul class="feature-list">
            <li>Organized by course code</li>
            <li>Semester-wise categorization</li>
            <li>Easy PDF uploads</li>
            <li>Quick preview feature</li>
          </ul>
        </div>

        <div class="feature-card">
          <h3>Academic Marketplace</h3>
          <p>Buy, sell, or exchange books, calculators, and other academic materials with fellow students.</p>
          <ul class="feature-list">
            <li>Direct student-to-student trading</li>
            <li>Secure chat system</li>
            <li>Fair pricing guidelines</li>
            <li>Verified student listings</li>
          </ul>
        </div>

        <div class="feature-card">
          <h3>Interactive Discussions</h3>
          <p>Engage in academic discussions, ask questions, and get help from seniors and peers.</p>
          <ul class="feature-list">
            <li>Course-specific forums</li>
            <li>Senior-junior mentoring</li>
            <li>Real-time responses</li>
            <li>Topic categorization</li>
          </ul>
        </div>

        <div class="feature-card">
          <h3>Smart Search</h3>
          <p>Find relevant study materials quickly with our intelligent search system.</p>
          <ul class="feature-list">
            <li>Advanced filters</li>
            <li>Course-based search</li>
            <li>Keyword highlighting</li>
            <li>Recent searches history</li>
          </ul>
        </div>

        <div class="feature-card">
          <h3>Notice Board</h3>
          <p>Stay updated with important academic news, events, and announcements.</p>
          <ul class="feature-list">
            <li>Important deadlines</li>
            <li>Event calendar</li>
            <li>Email notifications</li>
            <li>Custom alerts</li>
          </ul>
        </div>

        <div class="feature-card">
          <h3>Quality Control</h3>
          <p>Rate and review study materials to help others find the best resources.</p>
          <ul class="feature-list">
            <li>Peer review system</li>
            <li>Rating metrics</li>
            <li>Feedback comments</li>
            <li>Content moderation</li>
          </ul>
        </div>
      </div>

      <section class="cta-section">
        <h2>Ready to Enhance Your Academic Journey?</h2>
        <p>Join Study Buddy today and experience a better way to manage your university studies.</p>
        <a routerLink="/profile" class="primary-button">Get Started</a>
      </section>
    </div>
  `,
})
export class HomeComponent {}