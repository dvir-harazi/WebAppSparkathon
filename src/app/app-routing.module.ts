import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponentComponent } from './video-list-component/video-list-component.component';
import { RatingComponentComponent } from './rating-component/rating-component.component';
import { RecommendationComponentComponent } from './recommendation-component/recommendation-component.component';
import { QamComponent} from './qam/qam.component';

const routes: Routes = [
  { path: '', redirectTo: '/calls', pathMatch: 'full' },
  { path: 'calls', component: VideoListComponentComponent },
  { path: 'rate/:id', component: RatingComponentComponent },
  { path: 'recommend', component: RecommendationComponentComponent },
  { path: 'qam', component: QamComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
