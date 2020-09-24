import { Equipment } from './../models/equipment.model';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-equipment-shop',
  templateUrl: './equipment-shop.component.html',
  styleUrls: ['./equipment-shop.component.css']
})
export class EquipmentShopComponent implements OnInit {

  public equipments = new Array<Equipment>();

  constructor(private readonly apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getEquipment().subscribe(res => {
      this.equipments = res;
    });
  }

  purchaseEquipement(equipment: Equipment) {
    console.info("eq", equipment);
    const response = this.apiService.createPurchase(equipment.id);
    console.info("purchase", response);
  }
}
