const { Person, Wizard } = require('./person');

describe('Person', () => {
  test('le constructeur initialise le nom et 100 points de vie', () => {
    const person = new Person('Alice');
    expect(person.name).toBe('Alice');
    expect(person.lifePoints).toBe(100);
  });

  test('hit retire exactement 10 points de vie à la cible', () => {
    const attacker = new Person('Alice');
    const target = new Person('Bob');
    attacker.hit(target);
    expect(target.lifePoints).toBe(90);
  });

  test("hit ne modifie pas les points de vie de l'attaquant", () => {
    const attacker = new Person('Alice');
    const target = new Person('Bob');
    attacker.hit(target);
    expect(attacker.lifePoints).toBe(100);
  });

  test('hit est cumulatif', () => {
    const attacker = new Person('Alice');
    const target = new Person('Bob');
    attacker.hit(target);
    attacker.hit(target);
    attacker.hit(target);
    expect(target.lifePoints).toBe(70);
  });

  test("isDead retourne false quand la personne a tous ses points de vie", () => {
    const person = new Person('Alice');
    expect(person.isDead()).toBe(false);
  });

  test('isDead retourne false avec 1 point de vie', () => {
    const person = new Person('Alice');
    person.lifePoints = 1;
    expect(person.isDead()).toBe(false);
  });

  test('isDead retourne true avec 0 point de vie', () => {
    const person = new Person('Alice');
    person.lifePoints = 0;
    expect(person.isDead()).toBe(true);
  });

  test('isDead retourne true avec des points de vie négatifs', () => {
    const person = new Person('Alice');
    person.lifePoints = -5;
    expect(person.isDead()).toBe(true);
  });

  test('une personne meurt après 10 coups', () => {
    const attacker = new Person('Alice');
    const target = new Person('Bob');
    for (let i = 0; i < 9; i++) {
      attacker.hit(target);
    }
    expect(target.isDead()).toBe(false);
    attacker.hit(target);
    expect(target.isDead()).toBe(true);
  });
});

describe('Wizard', () => {
  test('un Wizard est une Person', () => {
    const wizard = new Wizard('Merlin');
    expect(wizard).toBeInstanceOf(Person);
    expect(wizard).toBeInstanceOf(Wizard);
  });

  test('le constructeur initialise le nom et 80 points de vie', () => {
    const wizard = new Wizard('Merlin');
    expect(wizard.name).toBe('Merlin');
    expect(wizard.lifePoints).toBe(80);
  });

  test('hit retire exactement 15 points de vie à la cible', () => {
    const wizard = new Wizard('Merlin');
    const target = new Person('Bob');
    wizard.hit(target);
    expect(target.lifePoints).toBe(85);
  });

  test("hit ne modifie pas les points de vie du Wizard", () => {
    const wizard = new Wizard('Merlin');
    const target = new Person('Bob');
    wizard.hit(target);
    expect(wizard.lifePoints).toBe(80);
  });

  test('hit retourne la cible', () => {
    const wizard = new Wizard('Merlin');
    const target = new Person('Bob');
    expect(wizard.hit(target)).toBe(target);
  });

  test("isDead est hérité de Person", () => {
    const wizard = new Wizard('Merlin');
    expect(wizard.isDead()).toBe(false);
    wizard.lifePoints = 0;
    expect(wizard.isDead()).toBe(true);
  });

  test('un Wizard meurt après 8 coups de Person', () => {
    const attacker = new Person('Alice');
    const wizard = new Wizard('Merlin');
    for (let i = 0; i < 7; i++) {
      attacker.hit(wizard);
    }
    expect(wizard.isDead()).toBe(false);
    attacker.hit(wizard);
    expect(wizard.isDead()).toBe(true);
  });
});