import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-service',
  templateUrl: './video-service.component.html',
  styleUrl: './video-service.component.css'
})
@Injectable({
  providedIn: 'root'
})
export class VideoServiceComponent {
  private apiUrl = 'http://localhost:4200';  // Adjust this to match your backend URL

  constructor(private http: HttpClient) { }

  getVideos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/videos`);
  }

  rateVideo(username: string, videoId: string, ratings: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/rate`, { username, video_id: videoId, ratings });
  }

  getRecommendations(username: string, startTime: string, endTime: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/recommend`, { username, start_time: startTime, end_time: endTime });
  }

}
