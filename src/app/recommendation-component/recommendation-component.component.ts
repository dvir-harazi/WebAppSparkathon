import { Component } from '@angular/core';
import { VideoServiceComponent } from '../video-service/video-service.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-recommendation-component',
  
  templateUrl: './recommendation-component.component.html',
  styleUrl: './recommendation-component.component.css'
})
export class RecommendationComponentComponent {

  constructor() { }

  progress = 75;
}
