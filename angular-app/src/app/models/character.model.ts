import { Equipment } from './equipment.model';
export class Character {
  constructor(
    public name: any,
    public hitPoints: number,
    public luck: number,
    public wealth: number,
    public equipment: Equipment[]
  ) {}
}
