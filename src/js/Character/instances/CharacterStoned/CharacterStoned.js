import Character from '../../Character';

/**
 *  Класс персонажа CharacterStoned
 *  расширяет класс персонажа Character свойством stoned
 *
 * @param {string} name - Имя персонажа
 *
 */

class CharacterStoned extends Character {
  constructor(name) {
    super(name);
    this.attackDistance = 1;
    this._stoned = false;
  }

  /**
  *  Геттер получения силы урона с учетом свойства stoned
  *
  */

  get attack() {
    let attack = this._attack * (1 - (this.attackDistance - 1) / 10);

    if (this.stoned) {
      attack -= Math.log2(this.attackDistance) * 5;
    }

    return Math.round(Math.max(attack, 0));
  }

  set attack(newProp) {
    this._attack = newProp;
    return this.attack;
  }

  /**
  *  Геттер получения состояния свойства this._stoned
  *
  */

  get stoned() {
    return this._stoned;
  }

  /**
  *  Сеттер включения/отключения свойства this._stoned
  *
  * @param {any} state - Состояние свойства
  *
  */

  set stoned(state) {
    if (state) {
      this._stoned = true;
    } else {
      this._stoned = false;
    }

    return this._stoned;
  }
}

export default CharacterStoned;
