import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header>
      <nav class="container">
        <h1>Study Buddy</h1>
        <ul>
          <li>
            <a routerLink="/" 
               routerLinkActive="active"
               [routerLinkActiveOptions]="{exact: true}">Home</a>
          </li>
          <li>
            <a routerLink="/resources" 
               routerLinkActive="active">Study Resources</a>
          </li>
          <li>
            <a routerLink="/marketplace" 
               routerLinkActive="active">Marketplace</a>
          </li>
          <li>
            <a routerLink="/notices" 
               routerLinkActive="active">Notices</a>
          </li>
          <li>
            <a routerLink="/profile" 
               routerLinkActive="active">Profile</a>
          </li>
        </ul>
      </nav>
    </header>
  `,
})
export class HeaderComponent {}