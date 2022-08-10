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
let i = -1;

export default class Team {
  static iterator() {
    // let i = 0;
    return {
      next() {
        i += 1;
        if (i === arr.length) {
          return {
            value: 'undefined',
            done: true,
          };
        }
        return {
          value: arr[i],
          done: false,
        };
      },
    };
  }
}
console.log(Team.iterator().next());
console.log(Team.iterator().next());
console.log(Team.iterator().next());
