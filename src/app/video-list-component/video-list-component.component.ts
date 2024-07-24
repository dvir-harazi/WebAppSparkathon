import { Component, OnInit } from '@angular/core';
import { VideoServiceComponent } from '../video-service/video-service.component';
import { Router } from '@angular/router';

interface Video {
  id: number;
  image: string;
  agentName: string;
  description: string;
  time: string;
  duration: string;
  direction: string;
  segmentId: string;
  rate: number;
}

@Component({
  selector: 'app-video-list-component',
  templateUrl: './video-list-component.component.html',
  styleUrl: './video-list-component.component.css'
})
export class VideoListComponentComponent {
  videos: Video[] = [
    { id: 1, agentName: 'Agent 1', image: '/assets/call.png', 
      description: 'This is a long description for the card', segmentId: "e28531b5-7ebd-491f-88c4-6c26bad48d50",
    time: "01-01-2023 08:49AM", duration: "21:09", direction: "outgoing", rate: 2 },
    { id: 2, agentName: 'Agent 2', image: '/assets/call.png', 
      description: 'Description of Call 2', segmentId: "e28531b5-7ebd-491f-88c4-6c26bad48d50",
    time: "01-02-2023 04:49PM", duration: "3:22", direction: "outgoing", rate: 5 },
    { id: 3, agentName: 'Agent 3', image: '/assets/call.png', 
      description: 'Description of Call 3', segmentId: "e28531b5-7ebd-491f-88c4-6c26bad48d50",
    time: "01-01-2024 08:49AM", duration: "1:33", direction: "outgoing", rate: 9 },
    { id: 4, agentName: 'Agent 4', image: '/assets/call.png', 
      description: 'Description of Call 4', segmentId: "e28531b5-7ebd-491f-88c4-6c26bad48d50",
    time: "01-02-2024 04:49AM", duration: "1:27", direction: "incoming", rate: 7 },
    { id: 5, agentName: 'Agent 5', image: '/assets/call.png', 
      description: 'Description of Call 5', segmentId: "e28531b5-7ebd-491f-88c4-6c26bad48d50",
    time: "20-01-2024 08:49AM", duration: "1:11", direction: "incoming", rate: 8 },
    { id: 6, agentName: 'Agent 6', image: '/assets/call.png', 
      description: 'Description of Call 6', segmentId: "e28531b5-7ebd-491f-88c4-6c26bad48d50",
    time: "01-03-2024 08:49AM", duration: "4:09", direction: "incoming", rate: 6 },
    { id: 7, agentName: 'Agent 7', image: '/assets/call.png', 
      description: 'Description of Call 7', segmentId: "e28531b5-7ebd-491f-88c4-6c26bad48d50",
    time: "01-07-2024 04:49AM", duration: "2:19", direction: "outgoing", rate: 10 },
    { id: 8, agentName: 'Agent 8', image: '/assets/call.png', 
      description: 'Description of Call 8', segmentId: "e28531b5-7ebd-491f-88c4-6c26bad48d50",
    time: "01-11-2024 08:49PM", duration: "5:01", direction: "outgoing", rate: 5 },
    { id: 9, agentName: 'Agent 9', image: '/assets/call.png', 
      description: 'Description of Call 9', segmentId: "e28531b5-7ebd-491f-88c4-6c26bad48d50",
    time: "11-02-2024 04:49AM", duration: "2:19", direction: "outgoing", rate: 8 },
    { id: 10, agentName: 'Agent 10', image: '/assets/call.png', 
      description: 'Description of Call 10', segmentId: "e28531b5-7ebd-491f-88c4-6c26bad48d50",
    time: "04-02-2024 04:49PM", duration: "2:59", direction: "incoming", rate: 7 },
  ];

  filteredVideos: Video[] = this.videos;
  filterText: string = '';
  selectedFilterAttribute: keyof Video = 'agentName';
  showFilters = false;
  imageSrc = '/assets/filter.jpg';

  constructor(private videoService: VideoServiceComponent,
    private router: Router
  ) { }

  ngOnInit() {
    this.videoService.getVideos().subscribe(
      (data) => {
        this.videos = data;
        this.filteredVideos = [...this.videos]; // Initialize filtered videos
      },
      (error) => console.error('Error fetching videos:', error)
    );
  }

  sortByAttribute(attribute: keyof Video) {
    this.filteredVideos.sort((a, b) => {
      if (a[attribute] < b[attribute]) {
        return -1;
      } else if (a[attribute] > b[attribute]) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  onSortChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.sortByAttribute(selectElement.value as keyof Video);
  }

  filterVideos() {
    const query = this.filterText.toLowerCase();
    this.filteredVideos = this.videos.filter(video => 
      video[this.selectedFilterAttribute].toString().toLowerCase().includes(query)
    );
  }

  onFilterTextChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.filterText = inputElement.value;
    this.filterVideos();
  }

  onFilterAttributeChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedFilterAttribute = selectElement.value as keyof Video;
    this.filterVideos();
  }

  navigateToExternalToQMA() {
    this.router.navigate(['/qma']);
  }
  onImageClick() {
      this.showFilters = !this.showFilters;
  }
}



