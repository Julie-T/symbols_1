const arr = [];

function Person(name, type, health, level, attack, defence) {
  this.name = name;
  this.type = type;
  this.health = health || 100;
  this.level = level || 1;
  this.attack = attack;
  this.defence = defence;
  this.add = () => {
    arr.push(this);
  };
}

const henry = new Person('Лучник', 'Bowman', 50, 1, 40, 10);
const phill = new Person('Маг', 'Wizard', 40, 1, 30, 20);

henry.add();
phill.add();
let i = 0;
export default class Team {
  static iterator() {
    // let i = 0;
    return {
      next() {
        if (i === arr.length) {
          return {
            value: 'undefined',
            done: true,
          };
        }

        const obj = {
          value: arr[i],
          done: false,
        };
        i += 1;
        return obj;
      },
    };
  }
}
