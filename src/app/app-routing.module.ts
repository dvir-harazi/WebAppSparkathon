import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponentComponent } from './video-list-component/video-list-component.component';
import { RatingComponentComponent } from './rating-component/rating-component.component';
import { RecommendationComponentComponent } from './recommendation-component/recommendation-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/videos', pathMatch: 'full' },
  { path: 'videos', component: VideoListComponentComponent },
  { path: 'rate/:id', component: RatingComponentComponent },
  { path: 'recommend', component: RecommendationComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
