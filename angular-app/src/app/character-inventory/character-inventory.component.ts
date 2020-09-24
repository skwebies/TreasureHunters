import { Character } from './../models/character.model';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-inventory',
  templateUrl: './character-inventory.component.html',
  styleUrls: ['./character-inventory.component.css']
})
export class CharacterInventoryComponent implements OnInit {

  public character: Character;
  public characters = new Array<Character>();
  public randomNumber: number;
  public characterCounts = 20;

  constructor(private readonly apiService: ApiService) { }

  ngOnInit(): void {
    this.randomNumber = this.characterCounts = Math.floor(Math.random() * 10) + 1;
    this.apiService.getCharacter().subscribe(res => {

      for(let i = 0; i < this.randomNumber; i ++) {
        this.character = res;
        this.characters.push(this.character);
      }
      console.info("char", this.characters);
    });
  }

}
