import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'video' },
  {
    path: 'video',
    component: UserComponent,
    children: [
      {
        path: '',
        component: VideoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
