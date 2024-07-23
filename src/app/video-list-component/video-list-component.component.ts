import { Component, OnInit } from '@angular/core';
import { VideoServiceComponent } from '../video-service/video-service.component';
@Component({
  selector: 'app-video-list-component',
  templateUrl: './video-list-component.component.html',
  styleUrl: './video-list-component.component.css'
})
export class VideoListComponentComponent {
  videos: any[] = [
    { id: 1, title: 'Video 1', description: 'Description of Video 1' },
    { id: 2, title: 'Video 2', description: 'Description of Video 2' },
    { id: 3, title: 'Video 3', description: 'Description of Video 3' },
    { id: 4, title: 'Video 4', description: 'Description of Video 4' },
    { id: 5, title: 'Video 5', description: 'Description of Video 5' },
    { id: 6, title: 'Video 6', description: 'Description of Video 6' },
    { id: 7, title: 'Video 7', description: 'Description of Video 7' },
    { id: 8, title: 'Video 8', description: 'Description of Video 8' },
    { id: 9, title: 'Video 9', description: 'Description of Video 9' },
    { id: 10, title: 'Video 10', description: 'Description of Video 10' }
  ];

  constructor(private videoService: VideoServiceComponent) { }

  ngOnInit() {
    this.videoService.getVideos().subscribe(
      (data) => this.videos = data,
      (error) => console.error('Error fetching videos:', error)
    );
  }
}



