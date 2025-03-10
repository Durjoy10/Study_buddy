import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Discussion {
    id: number;
    title: string;
    content: string;
    author: string;
    date: Date;
    category: string;
    replies: number;
    views: number;
}

@Component({
    selector: 'app-discussions',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './discussions.component.html',
    styleUrls: ['./discussions.component.scss']
})
export class DiscussionsComponent implements OnInit {
    discussions: Discussion[] = [
        {
            id: 1,
            title: 'Help with Calculus III Integration',
            content: 'I\'m having trouble understanding triple integrals. Can someone explain the concept?',
            author: 'John Doe',
            date: new Date(),
            category: 'Mathematics',
            replies: 5,
            views: 120
        },
        {
            id: 2,
            title: 'Physics Lab Report Format',
            content: 'What\'s the standard format for writing physics lab reports?',
            author: 'Jane Smith',
            date: new Date(),
            category: 'Physics',
            replies: 3,
            views: 85
        }
    ];

    newDiscussion = {
        title: '',
        content: '',
        category: ''
    };

    categories = [
        'Mathematics',
        'Physics',
        'Chemistry',
        'Biology',
        'Computer Science',
        'Engineering',
        'General'
    ];

    constructor() { }

    ngOnInit(): void { }

    createDiscussion(): void {
        if (this.newDiscussion.title && this.newDiscussion.content && this.newDiscussion.category) {
            const discussion: Discussion = {
                id: this.discussions.length + 1,
                title: this.newDiscussion.title,
                content: this.newDiscussion.content,
                author: 'Current User', // Replace with actual user
                date: new Date(),
                category: this.newDiscussion.category,
                replies: 0,
                views: 0
            };
            this.discussions.unshift(discussion);
            this.resetForm();
        }
    }

    private resetForm(): void {
        this.newDiscussion = {
            title: '',
            content: '',
            category: ''
        };
    }
} 