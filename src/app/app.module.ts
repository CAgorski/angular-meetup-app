import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {SecurityModule} from './security/security.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptor } from './security/token.interceptor';
import { ConfigurationInterceptor } from './shared/configuration.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    DashboardModule,
    HttpClientModule,
    AppRoutingModule,
    SecurityModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ConfigurationInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
