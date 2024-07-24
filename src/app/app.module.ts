import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoListComponentComponent } from './video-list-component/video-list-component.component';
import { RatingComponentComponent } from './rating-component/rating-component.component';
import { RecommendationComponentComponent } from './recommendation-component/recommendation-component.component';
import { VideoServiceComponent } from './video-service/video-service.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { QmaComponent } from './qma/qma.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { TimeslotComponent } from './timeslot/timeslot.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponentComponent,
    RatingComponentComponent,
    RecommendationComponentComponent,
    VideoServiceComponent,
    QmaComponent,
    LeaderboardComponent,
    TimeslotComponent,
    CountdownTimerComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    NgxMatTimepickerModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
  
  ],
  providers: [VideoServiceComponent, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
