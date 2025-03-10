import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private lastScrollTop = 0;
  isHeaderHidden = false;
  currentRoute = '/';
  currentTheme: 'light' | 'dark' = 'light';
  isMobileMenuOpen = false;

  @ViewChild('mobileNav') mobileNav!: ElementRef;
  @ViewChild('hamburgerButton') hamburgerButton!: ElementRef;

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) {
    // Set initial route
    this.currentRoute = this.router.url;
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        // Close mobile menu when route changes
        this.isMobileMenuOpen = false;
      }
    });

    // Subscribe to theme changes
    this.themeService.getTheme().subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.isMobileMenuOpen) {
      const mobileNav = this.mobileNav?.nativeElement;
      const hamburgerButton = this.hamburgerButton?.nativeElement;

      if (mobileNav && hamburgerButton) {
        const isClickInside = mobileNav.contains(event.target) || hamburgerButton.contains(event.target);
        if (!isClickInside) {
          this.isMobileMenuOpen = false;
        }
      }
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDirection = currentScrollTop > this.lastScrollTop;

    // Show header when scrolling up or at the top
    if (currentScrollTop < 50 || !scrollDirection) {
      this.isHeaderHidden = false;
    } else {
      this.isHeaderHidden = true;
    }

    this.lastScrollTop = currentScrollTop;
  }
} 