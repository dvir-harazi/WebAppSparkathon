import { Component } from '@angular/core';
import { VideoServiceComponent } from '../video-service/video-service.component';

@Component({
  selector: 'app-recommendation-component',
  templateUrl: './recommendation-component.component.html',
  styleUrl: './recommendation-component.component.css'
})
export class RecommendationComponentComponent {
  startTime: string = '';
  endTime: string = '';
  recommendations: any[] = [];

  constructor(private videoService: VideoServiceComponent) { }

  onSubmit() {
    // Hardcoded username for simplicity. In a real app, you'd get this from user authentication.
    const username = 'testUser';
    this.videoService.getRecommendations(username, this.startTime, this.endTime).subscribe(
      (data) => this.recommendations = data.recommendations,
      (error) => console.error('Error fetching recommendations:', error)
    );
  }
}
