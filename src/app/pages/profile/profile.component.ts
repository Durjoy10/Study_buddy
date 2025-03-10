import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  template: `
    <div class="container">
      <h2 class="page-title">Your Profile</h2>
      <p class="page-content">Manage your profile settings here.</p>
    </div>
  `,
})
export class ProfileComponent {}