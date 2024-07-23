import { Component, OnInit } from '@angular/core';
import { VideoServiceComponent } from '../video-service/video-service.component';
@Component({
  selector: 'app-video-list-component',
  templateUrl: './video-list-component.component.html',
  styleUrl: './video-list-component.component.css'
})
export class VideoListComponentComponent {
  videos: any[] = [
    { id: 1, agentName: 'Agent 1', image: '/assets/call.png', 
      description: 'Description of Call 1', segmentId: "e28531b5-7ebd-491f-88c4-6c26bad48d50",
    time: "01-01-2024 08:49AM", duration: "1:09", incoming: false },
    { id: 2, agentName: 'Agent 2', image: '/assets/call.png', 
      description: 'Description of Call 2', segmentId: "e28531b5-7ebd-491f-88c4-6c26bad48d50",
    time: "01-02-2024 04:49AM", duration: "2:19", incoming: true }
  ];

  baseurl = "https://na1.dev.nice-incontact.com/player/#/cxone-player/segments/";
  
  constructor(private videoService: VideoServiceComponent) { }

  ngOnInit() {
    this.videoService.getVideos().subscribe(
      (data) => this.videos = data,
      (error) => console.error('Error fetching videos:', error)
    );
  }
}



