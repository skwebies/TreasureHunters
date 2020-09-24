export class Equipment {
  constructor(
    public  id: string,
    public  name: string,
    public  type: string,
    public  hpModifier: number,
    public  luckModifier: number,
    public  value: number ) {}

    public static deserialize(json: any): Equipment | null {
      if(!json){
        return null;
      }

      return new Equipment(
        json.id,
        json.name,
        json.type,
        json.hpModifier,
        json.luckModifier,
        json.value
      )
    }
}
