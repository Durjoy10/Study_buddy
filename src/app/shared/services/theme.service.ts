import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private theme = new BehaviorSubject<Theme>('light');

    constructor() {
        // Check for saved theme preference or system preference
        const savedTheme = localStorage.getItem('theme') as Theme;
        if (savedTheme) {
            this.setTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.setTheme(prefersDark ? 'dark' : 'light');
        }
    }

    getTheme() {
        return this.theme.asObservable();
    }

    setTheme(theme: Theme) {
        this.theme.next(theme);
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }

    toggleTheme() {
        const currentTheme = this.theme.value;
        this.setTheme(currentTheme === 'light' ? 'dark' : 'light');
    }
} 