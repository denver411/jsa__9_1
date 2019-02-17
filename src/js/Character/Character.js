/**
 *  Базовый класс персонажа
 *
 * @param {string} name - Имя персонажа
 *
 */

class Character {
  constructor(name = 'Just a pawn') {
    this.name = name;
    this.level = 1;
    this.health = 100;
    this._attack = 0;
    this._defence = 0;
  }

  get attack() {
    return this._attack;
  }

  set attack(newProp) {
    this._attack = newProp;
    return this.attack;
  }

  get defence() {
    return this._defence;
  }

  set defence(newProp) {
    this._defence = newProp;
    return this.defence;
  }
}

export default Character;
