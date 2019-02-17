import Character from '../../src/js/Character/Character';

it('Создается персонаж с классом Character и заданным именем', () => {
  const character = new Character('Luntic');

  expect(character).toEqual({
    name: 'Luntic',
    level: 1,
    health: 100,
    _attack: 0,
    _defence: 0,
  });
});

it('Создается персонаж с классом Character c именем по умолчанию', () => {
  const character = new Character();

  expect(character).toEqual({
    name: 'Just a pawn',
    level: 1,
    health: 100,
    _attack: 0,
    _defence: 0,
  });
});

it('Уровень атаки можно изменить', () => {
  const character = new Character();

  character.attack = 50;

  expect(character.attack).toBe(50);
});

it('Уровень защиты можно изменить', () => {
  const character = new Character();

  character.defence = 50;

  expect(character.defence).toBe(50);
});
