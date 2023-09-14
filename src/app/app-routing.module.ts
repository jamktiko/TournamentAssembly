import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SelectionComponent } from './selection/selection.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'selection', component: SelectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
