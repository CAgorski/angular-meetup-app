import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { CharactersRoutingModule } from './characters-routing.module';
import { ListCharactersComponent } from './list-characters/list-characters.component';
import { CreateEditCharacterComponent } from './create-edit-character/create-edit-character.component';

@NgModule({
  declarations: [ListCharactersComponent, CreateEditCharacterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
