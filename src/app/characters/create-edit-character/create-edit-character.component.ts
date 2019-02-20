import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CharacterService } from '../character.service';
import { Character } from '../models/character.model';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-edit-character',
  templateUrl: './create-edit-character.component.html',
  styleUrls: ['./create-edit-character.component.css']
})
export class CreateEditCharacterComponent implements OnInit {

  public isEdit: boolean = false;
  public character: Character;
  public characterForm: FormGroup;

  constructor(
    private route:ActivatedRoute,
    private characterService:CharacterService,
    private fb:FormBuilder) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    if(id !== undefined){
      this.isEdit = true;
      this.characterService.getCharacter(id).subscribe((data:Character) =>{
        this.character = data;
        this.characterForm.setValue(this.character);  
      });
    }

    this.characterForm = this.fb.group({
      id: [''],
      name: ['',Validators.required],
      race: ['',Validators.required]
    });

  }

  save(){
    if(this.characterForm.valid){
      if(this.isEdit){
        this.characterService.updateCharacter(this.characterForm.value).subscribe(resp => {
          alert('Character updated');
        });
        
      }
      else{
        this.characterService.createCharacter(this.characterForm.value).subscribe(resp =>{
          alert('Character created');
        });
        
      }

    }
  }

}
