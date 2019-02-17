import CharacterStoned from '../../src/js/Character/instances/CharacterStoned/CharacterStoned';

it('Создается персонаж с классом CharacterStoned', () => {
  const character = new CharacterStoned('I am stoned');

  expect(character.name).toBe('I am stoned');
  expect(character instanceof CharacterStoned).toBeTruthy();
});

it('Cвойство stoned отключено по умолчанию', () => {
  const character = new CharacterStoned();

  expect(character.stoned).toBeFalsy();
});

it('Cостояние свойства stoned изменяется', () => {
  const character = new CharacterStoned();

  character.stoned = 1;
  expect(character.stoned).toBeTruthy();

  character.stoned = 0;
  expect(character.stoned).toBeFalsy();
});

it('Урон уменьшается с увеличением расстояния атаки', () => {
  const character = new CharacterStoned();

  character.attack = 100;
  expect(character.attack).toBe(100);

  character.attackDistance = 5;
  expect(character.attack).toBe(60);
});

it('Урон уменьшается с включенным свойством stoned', () => {
  const character = new CharacterStoned();

  character.attackDistance = 2;
  character.attack = 100;
  expect(character.attack).toBe(90);

  character.stoned = 1;
  expect(character.attack).toBe(85);
});
