import { Component } from '@angular/core';
import { UserContext } from './security/user-context.model';
import { AuthenticationService } from './security/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'south-demo';
  public userContext: UserContext;

  constructor(private authService : AuthenticationService){
    this.authService.userContext.subscribe(uc => this.userContext = uc);
  }
}
