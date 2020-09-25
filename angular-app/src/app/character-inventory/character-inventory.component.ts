import { Equipment } from './../models/equipment.model';
import { Character } from './../models/character.model';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-inventory',
  templateUrl: './character-inventory.component.html',
  styleUrls: ['./character-inventory.component.css'],
})
export class CharacterInventoryComponent implements OnInit {
  public character: Character;
  public randomNumber: number;

  constructor(private readonly apiService: ApiService) {}

  ngOnInit(): void {


    this.apiService.getCharacter().subscribe((res) => {

      this.character = res;
      this.character.name = this.randomizeName(this.character.name);
      this.character.wealth = this.getRandomNumber(100);
      this.apiService.saveCharacter(this.character);
    });
  }

  public randomizeName(originalName: string): string {
    const randomName: string = Math.random().toString(36).substring(10);
    return `${originalName}${randomName}`;
  }
  public getRandomNumber(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }


  private checkCharacterInventory() {
    this.character.equipment.forEach((equipment: Equipment) => {
      switch (equipment.type) {
        case 'Armor':
          this.character.luck + 10;
          break;
        case 'Weapon':
          this.character.hitPoints + 25;
          break;
        case 'Trinket':
          this.character.luck + 5;
          break;
      }
    });
  }
}
