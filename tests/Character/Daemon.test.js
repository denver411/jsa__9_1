import Daemon from '../../src/js/Character/instances/CharacterStoned/instances/Daemon';

it('Создается персонаж с классом Daemon', () => {
  const daemon = new Daemon('Daemon');

  expect(daemon).toEqual({
    name: 'Daemon',
    type: 'Daemon',
    level: 1,
    health: 100,
    _attack: 10,
    _defence: 40,
    _stoned: false,
    attackDistance: 1,
  });
});
