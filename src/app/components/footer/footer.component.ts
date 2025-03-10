import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="container">
        <p>&copy; 2024 Study Buddy. All rights reserved.</p>
      </div>
    </footer>
  `,
})
export class FooterComponent {}