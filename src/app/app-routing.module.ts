import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDashboardComponent } from './dashboard/view-dashboard/view-dashboard.component';

const routes: Routes = [
  {path: '', component: ViewDashboardComponent},
  {path: 'characters', loadChildren: './characters/characters.module#CharactersModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
