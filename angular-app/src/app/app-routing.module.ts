import { EquipmentShopComponent } from './equipment-shop/equipment-shop.component';
import { CharacterInventoryComponent } from './character-inventory/character-inventory.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { paths } from './paths';

const routes: Routes = [
 {path:'', redirectTo: `/${paths.equipments}`, pathMatch: 'full'},
 {path: 'equipments', component: EquipmentShopComponent},
 {path: 'characters', component: CharacterInventoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
