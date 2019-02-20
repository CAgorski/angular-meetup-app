import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/security/authentication.service';
import {Router} from '@angular/router';
import { UserContext } from 'src/app/security/user-context.model';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  private userContext: UserContext;

  constructor(private router: Router, private authService: AuthenticationService) {
    this.authService.userContext.subscribe(uc => this.userContext = uc);
   }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }  
}
