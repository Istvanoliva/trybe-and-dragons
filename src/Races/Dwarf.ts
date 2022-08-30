import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.instancesCount += 1;
  }

  static createdRacesInstances(): number {
    return this.instancesCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;