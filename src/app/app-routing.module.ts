import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDashboardComponent } from './dashboard/view-dashboard/view-dashboard.component';
import { LoginComponent } from './security/login/login.component';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
  {
    path: '', 
    component: ViewDashboardComponent,
    canActivate: [AuthGuard]
  },
  {path: 'login', component: LoginComponent },
  {
    path: 'characters', 
    loadChildren: './characters/characters.module#CharactersModule',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
