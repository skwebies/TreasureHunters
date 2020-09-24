import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { EquipmentShopComponent } from './equipment-shop/equipment-shop.component';
import { CharacterInventoryComponent } from './character-inventory/character-inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipmentShopComponent,
    CharacterInventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
