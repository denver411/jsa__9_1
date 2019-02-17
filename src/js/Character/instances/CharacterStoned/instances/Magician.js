import StonedCharacter from '../CharacterStoned';

/**
 *  Класс персонажа Magician
 *
 * @param {string} name - Имя персонажа
 *
 */

class Magician extends StonedCharacter {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this._attack = 10;
    this._defence = 40;
  }
}

export default Magician;
