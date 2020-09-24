import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentShopComponent } from './equipment-shop.component';

describe('EquipmentShopComponent', () => {
  let component: EquipmentShopComponent;
  let fixture: ComponentFixture<EquipmentShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
