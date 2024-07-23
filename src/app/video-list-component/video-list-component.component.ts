import { Component, OnInit } from '@angular/core';
import { VideoServiceComponent } from '../video-service/video-service.component';
@Component({
  selector: 'app-video-list-component',
  templateUrl: './video-list-component.component.html',
  styleUrl: './video-list-component.component.css'
})
export class VideoListComponentComponent {
  videos: any[] = [
    { id: 1, agentName: 'Agent 1', image: '/assets/call.png', description: 'Description of Video 1' },
    { id: 2, agentName: 'Agent 2', image: '/assets/call.png', description: 'Description of Video 2' },
    { id: 3, agentName: 'Agent 3', image: '/assets/call.png', d: 'Description of Video 3' },
    { id: 4, agentName: 'Agent 4', image: '/assets/call.png', d: 'Description of Video 4' },
    { id: 5, agentName: 'Agent 5', image: '/assets/call.png', d: 'Description of Video 5' },
    { id: 6, agentName: 'Agent 6', image: '/assets/call.png', dscription: 'Description of Video 6' },
    { id: 7, agentName: 'Agent 7', image: '/assets/call.png', d: 'Description of Video 7' },
    { id: 8, agentName: 'Agent 8', image: '/assets/call.png', d: 'Description of Video 8' },
    { id: 9, agentName: 'Agent 9', image: '/assets/call.png', d: 'Description of Video 9' },
    { id: 10, agentName: 'Agent 10', image: '/assets/call.png', d: 'Description of Video 10' }
  ];

  constructor(private videoService: VideoServiceComponent) { }

  ngOnInit() {
    this.videoService.getVideos().subscribe(
      (data) => this.videos = data,
      (error) => console.error('Error fetching videos:', error)
    );
  }
}



