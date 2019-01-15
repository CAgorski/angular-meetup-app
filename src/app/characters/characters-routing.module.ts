import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCharactersComponent } from './list-characters/list-characters.component';
import { CreateEditCharacterComponent } from './create-edit-character/create-edit-character.component';

const routes: Routes = [
  { path: '', component:ListCharactersComponent},
  { path: ':id/edit', component:CreateEditCharacterComponent},
  { path: 'create', component:CreateEditCharacterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
