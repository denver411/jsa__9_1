import Magician from '../../src/js/Character/instances/CharacterStoned/instances/Magician';

it('Создается персонаж с классом Magician', () => {
  const magician = new Magician('Magician');

  expect(magician).toEqual({
    name: 'Magician',
    type: 'Magician',
    level: 1,
    health: 100,
    _attack: 10,
    _defence: 40,
    _stoned: false,
    attackDistance: 1,
  });
});
