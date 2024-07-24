import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponentComponent } from './video-list-component/video-list-component.component';
import { RecommendationComponentComponent } from './recommendation-component/recommendation-component.component';
import { QmaComponent} from './qma/qma.component';
import { TimeslotComponent } from './timeslot/timeslot.component';

const routes: Routes = [
  { path: '', redirectTo: '/recommend', pathMatch: 'full' },
  { path: 'calls', component: VideoListComponentComponent },
  { path: 'recommend', component: RecommendationComponentComponent },
  { path: 'qma', component: QmaComponent },
  { path: 'timeslot', component: TimeslotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
