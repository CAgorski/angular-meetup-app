import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RouterModule } from '@angular/router';
import { SecurityModule } from '../security/security.module';

@NgModule({
  declarations: [MainHeaderComponent, MainNavComponent],
  exports: [MainHeaderComponent, MainNavComponent],
  imports: [
    CommonModule,
    RouterModule,
    SecurityModule
  ]
})
export class LayoutModule { }
