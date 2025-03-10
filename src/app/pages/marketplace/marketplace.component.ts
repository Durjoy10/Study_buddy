import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface MarketplaceItem {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  seller: string;
  rating: number;
  reviews: number;
  condition: 'new' | 'used';
  location: string;
}

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent {
  items: MarketplaceItem[] = [
    {
      id: 1,
      title: 'Calculus Textbook - 12th Edition',
      description: 'Excellent condition, barely used. Includes all chapters and practice problems.',
      price: 45.99,
      image: 'assets/images/calculus-book.jpg',
      category: 'Textbooks',
      seller: 'John Smith',
      rating: 4.8,
      reviews: 12,
      condition: 'used',
      location: 'New York, NY'
    },
    {
      id: 2,
      title: 'Scientific Calculator TI-84 Plus',
      description: 'Brand new, sealed in box. Perfect for engineering and math courses.',
      price: 89.99,
      image: 'assets/images/calculator.jpg',
      category: 'Electronics',
      seller: 'Sarah Johnson',
      rating: 5.0,
      reviews: 8,
      condition: 'new',
      location: 'Los Angeles, CA'
    },
    {
      id: 3,
      title: 'Organic Chemistry Lab Kit',
      description: 'Complete lab kit with all necessary equipment and safety gear.',
      price: 129.99,
      image: 'assets/images/chemistry-kit.jpg',
      category: 'Lab Equipment',
      seller: 'Mike Wilson',
      rating: 4.5,
      reviews: 15,
      condition: 'used',
      location: 'Chicago, IL'
    },
    // Add more items as needed
  ];

  categories = [
    'All',
    'Textbooks',
    'Electronics',
    'Lab Equipment',
    'Study Materials',
    'Other'
  ];

  selectedCategory = 'All';

  filterByCategory(category: string) {
    this.selectedCategory = category;
  }

  get filteredItems() {
    if (this.selectedCategory === 'All') {
      return this.items;
    }
    return this.items.filter(item => item.category === this.selectedCategory);
  }
}