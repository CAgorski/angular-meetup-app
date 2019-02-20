import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;
  private returnUrl: string;

  constructor(
    private fb : FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: ['', Validators.required]
    });
  
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(){
    if(this.loginForm.invalid){
      return;
    }

    this.authService.login(this.loginForm.value).subscribe(resp => {
      this.router.navigate([this.returnUrl]);
    });
  }
}
