import { EnergyType } from '../Energy';

abstract class Archetype {
  readonly _name: string;
  readonly _special: number;
  readonly _cost: number;

  constructor(name:string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  get name() {
    return this._name;
  }

  get special() {
    return this._special;
  }

  get cost() {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;