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
    time: "01-02-2024 04:49PM", duration: "2:19", incoming: true },
    { id: 3, agentName: 'Agent 3', image: '/assets/call.png', 
      description: 'Description of Call 3', segmentId: "e28531b5-7ebd-491f-88c4-6c26bad48d50",
    time: "01-01-2024 08:49AM", duration: "1:09", incoming: false },
    { id: 4, agentName: 'Agent 4', image: '/assets/call.png', 
      description: 'Description of Call 4', segmentId: "e28531b5-7ebd-491f-88c4-6c26bad48d50",
    time: "01-02-2024 04:49AM", duration: "2:19", incoming: true },
    { id: 5, agentName: 'Agent 5', image: '/assets/call.png', 
      description: 'Description of Call 5', segmentId: "e28531b5-7ebd-491f-88c4-6c26bad48d50",
    time: "20-01-2024 08:49AM", duration: "1:19", incoming: false },
    { id: 6, agentName: 'Agent 6', image: '/assets/call.png', 
      description: 'Description of Call 6', segmentId: "e28531b5-7ebd-491f-88c4-6c26bad48d50",
    time: "01-03-2024 08:49AM", duration: "4:09", incoming: false },
    { id: 7, agentName: 'Agent 7', image: '/assets/call.png', 
      description: 'Description of Call 7', segmentId: "e28531b5-7ebd-491f-88c4-6c26bad48d50",
    time: "01-07-2024 04:49AM", duration: "2:19", incoming: true },
    { id: 8, agentName: 'Agent 8', image: '/assets/call.png', 
      description: 'Description of Call 8', segmentId: "e28531b5-7ebd-491f-88c4-6c26bad48d50",
    time: "01-11-2024 08:49PM", duration: "5:01", incoming: false },
    { id: 9, agentName: 'Agent 9', image: '/assets/call.png', 
      description: 'Description of Call 9', segmentId: "e28531b5-7ebd-491f-88c4-6c26bad48d50",
    time: "11-02-2024 04:49AM", duration: "2:19", incoming: true },
    { id: 10, agentName: 'Agent 10', image: '/assets/call.png', 
      description: 'Description of Call 10', segmentId: "e28531b5-7ebd-491f-88c4-6c26bad48d50",
    time: "04-02-2024 04:49PM", duration: "2:59", incoming: true },
  ];

  baseurl = "https://na1.dev.nice-incontact.com/player/#/cxone-player/segments/";

  constructor(private videoService: VideoServiceComponent) { }

  ngOnInit() {
    this.videoService.getVideos().subscribe(
      (data) => this.videos = data,
      (error) => console.error('Error fetching videos:', error)
    );
  }

  navigateToExternalLink(link: any) {
    window.open(this.baseurl+link.segmentId);
  }
}



