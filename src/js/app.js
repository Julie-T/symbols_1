export default class Person {
  constructor(name, type, health, level, attack, defence) {
    if ((typeof name === 'string') && (name.length > 1) && (name.length < 11)) {
      this.name = name;
      this.type = type;
      this.health = health || 100;
      this.level = level || 1;
      this.attack = attack;
      this.defence = defence;
    } else {
      throw new Error('Данные некорректны');
    }
  }
}


export class Team {
  constructor() {
    this.newBuffer = new Uint16Array();
    this.newArray = [];
  }

  load() {
    function getBuffer() {
      const data = new Person('Лучник','Bowman', 50, 1, 40, 10);
      return ((input) => {
        const buffer = new ArrayBuffer(data.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i += 1) {
          bufferView[i] = input.charCodeAt(i);
        }
        return buffer;
      })(data);
    }
    this.newBuffer = getBuffer();
    return this.newBuffer;
  }

  toString() {
    for (let i = 0; i < this.newBuffer.length - 1; i += 1) {
      this.newBuffer.forEach((elem) => {
        String.fromCharCode(elem);
      });
    }
    return this.newBuffer;
  }
}

const arrayBufferConverter = new ArrayBufferConverter();
console.log(arrayBufferConverter.load());

console.log(arrayBufferConverter.toString());
