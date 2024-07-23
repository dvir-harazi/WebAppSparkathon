import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoServiceComponent } from '../video-service/video-service.component';

@Component({
  selector: 'app-rating-component',
  templateUrl: './rating-component.component.html',
  styleUrl: './rating-component.component.css'
})
export class RatingComponentComponent {
  videoId: string = '';
  classifications: string[] = ['genre', 'length', 'era'];  // Add all your classifications here
  ratings: any = {};

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoServiceComponent
  ) { }

  ngOnInit() {
    this.videoId = this.route.snapshot.paramMap.get('id') || '';
  }

  onSubmit() {
    // Hardcoded username for simplicity. In a real app, you'd get this from user authentication.
    const username = 'testUser';
    this.videoService.rateVideo(username, this.videoId, this.ratings).subscribe(
      (response) => console.log('Rating submitted successfully', response),
      (error) => console.error('Error submitting rating:', error)
    );
  }
}
