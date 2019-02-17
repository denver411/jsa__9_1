import Magician from './js/Character/instances/CharacterStoned/instances/Magician';

const mag = new Magician('Котик');

console.log(mag.attack);

mag.stoned = 1;

mag.attack = 100;

console.log(mag);
