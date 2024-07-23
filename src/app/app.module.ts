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
import { QamComponent } from './qam/qam.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponentComponent,
    RatingComponentComponent,
    RecommendationComponentComponent,
    VideoServiceComponent,
    QamComponent
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
    MatInputModule
  ],
  providers: [VideoServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
