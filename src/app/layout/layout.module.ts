import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainHeaderComponent, MainNavComponent],
  exports: [MainHeaderComponent, MainNavComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
