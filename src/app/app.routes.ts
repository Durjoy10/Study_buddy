import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { NoticesComponent } from './pages/notices/notices.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'notices', component: NoticesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '' }
];