import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponentComponent } from './video-list-component/video-list-component.component';
import { QmaComponent} from './qma/qma.component';

const routes: Routes = [
  { path: '', redirectTo: '/calls', pathMatch: 'full' },
  { path: 'calls', component: VideoListComponentComponent },
  { path: 'qma', component: QmaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
