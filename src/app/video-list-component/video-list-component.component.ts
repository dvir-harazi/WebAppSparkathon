import { Component, OnInit } from '@angular/core';
import { VideoServiceComponent } from '../video-service/video-service.component';
@Component({
  selector: 'app-video-list-component',
  templateUrl: './video-list-component.component.html',
  styleUrl: './video-list-component.component.css'
})
export class VideoListComponentComponent {
  videos: any[] = [];

  constructor(private videoService: VideoServiceComponent) { }

  ngOnInit() {
    this.videoService.getVideos().subscribe(
      (data) => this.videos = data,
      (error) => console.error('Error fetching videos:', error)
    );
  }
}



