import { Component } from '@angular/core';

@Component({
  selector: 'app-notices',
  standalone: true,
  template: `
    <div class="container">
      <h2 class="page-title">Notice Board</h2>
      <p class="page-content">Stay updated with important academic announcements and events.</p>
    </div>
  `,
})
export class NoticesComponent {}