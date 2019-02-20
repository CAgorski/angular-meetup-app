import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginInfo } from './login-info.model';
import {map, catchError} from 'rxjs/operators';
import { UserContext } from './user-context.model';
import { Observable, BehaviorSubject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private contextKey: string = 'currentContext';
  private userContextSubject: BehaviorSubject<UserContext>;
  public userContext : Observable<UserContext>;

  constructor(private http: HttpClient) {
    this.userContextSubject = new BehaviorSubject<UserContext>(JSON.parse(localStorage.getItem(this.contextKey)));
    this.userContext = this.userContextSubject.asObservable();
   }

  login(loginInfo : LoginInfo){
    return this.http.post<UserContext>('/login',loginInfo).pipe(
      map(context =>{
        if(context && context.token){
          localStorage.setItem(this.contextKey,JSON.stringify(context));
          this.userContextSubject.next(context);
        }

        return context;
      }),
      catchError(this.errorHandler));
  }

  logout(){
    localStorage.removeItem(this.contextKey);
    this.userContextSubject.next(null);
  }

  getCurrentContext() : UserContext{
    return this.userContextSubject.value;
  }

  private errorHandler(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error(`There was an error ${error.error.message}`);
      alert(`There was an error ${error.error.message}`);
    }
    else{
      console.error(`There was a HTTP error ${error.statusText}`);
      alert(`There was a HTTP error ${error.statusText}`);
    }

    return throwError('There was an error, please try again');
  }
}
