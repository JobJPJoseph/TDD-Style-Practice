class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello ${this.name}`;
  }

  visit(person) {
    return `${this.name} visited ${person.name}`;
  }

  switchVisit(otherPerson) {
    return this.visit(otherPerson);
  }

  update(obj) {
    // should update this.name, this.age using obj
    if (typeof obj !== 'object') throw new Error();

    if (obj.name === undefined || obj.age === undefined) throw new Error();

    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj) {
    if(typeof obj.name === 'string' && typeof obj.age === 'number') {
      this.update(obj);
      return true;
    } else {
      return false;
    }
  }

  static greetAll(obj) {
    if(typeof obj !== 'array') return [];
    // use Array.map

    return obj.map((person) => person.sayHello());
  }

}

module.exports = Person;
