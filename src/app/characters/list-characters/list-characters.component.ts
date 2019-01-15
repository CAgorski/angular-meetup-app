import { Component, OnInit } from '@angular/core';
import {Character} from '../models/character.model';
import { HttpClient } from 'selenium-webdriver/http';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent implements OnInit {

  characters: Character[];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacters().subscribe((data:Character[]) => {
      this.characters = data;
    });
  }

}
