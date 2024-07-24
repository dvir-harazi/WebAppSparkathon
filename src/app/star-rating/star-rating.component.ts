import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() starCount: number = 5;
  @Output() ratingUpdated = new EventEmitter<number>();

  stars: boolean[] = Array(this.starCount).fill(false);

  rate(rating: number): void {
    this.rating = rating;
    this.ratingUpdated.emit(this.rating);
  }

  setTempRating(rating: number): void {
    this.stars = this.stars.map((_, i) => i < rating);
  }

  clearTempRating(): void {
    this.setTempRating(this.rating);
  }
}
