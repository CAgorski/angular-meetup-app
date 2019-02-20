import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Character} from './models/character.model';
import { throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }
  public getCharacters(){
    return this.http.get<Character[]>('/characters').pipe(catchError(this.errorHandler));
  }

  public getCharacter(id:number){
    return this.http.get<Character>(`/characters/${id}`).pipe(catchError(this.errorHandler));
  }

  public createCharacter(character:Character){
    return this.http.post(`/characters`,character).pipe(catchError(this.errorHandler));
  }

  public updateCharacter(character:Character){
    return this.http.put(`/characters/${character.id}`,character).pipe(catchError(this.errorHandler));
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
