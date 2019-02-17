import StonedCharacter from '../CharacterStoned';

/**
 *  Класс персонажа Daemon
 *
 * @param {string} name - Имя персонажа
 *
 */

class Daemon extends StonedCharacter {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
    this._attack = 10;
    this._defence = 40;
  }
}

export default Daemon;
