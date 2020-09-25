import { Equipment } from './../models/equipment.model';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public equipments: Equipment;
  private character: Character;
  constructor(private readonly http: HttpClient) {}

  getCharacter(): Observable<Character> {
    return this.http.get<Character>(environment.apiBaseUrl + 'Character');
  }

  getEquipment(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(environment.apiBaseUrl + 'Equipment');
  }

  createPurchase(equipmentId: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(
      environment.apiBaseUrl + 'Purchases/' + equipmentId,
      httpOptions
    );
  }

  public saveCharacter(character: Character): void {
    this.character = character;
  }

  public getUptadedCharacter(character: Character): Character {
    return this.character;
  }
}
