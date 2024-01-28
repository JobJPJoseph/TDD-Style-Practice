// Your code here
const expect = require('chai').expect;
const Person = require('../problems/person');
const sinon = require('sinon');

describe('Person class', function () {

    describe('Constructor', function () {

        it('should accept two argument "name" and "age" and initialize them', function () {
            const name = 'Jake';
            const age = 25;
            const person = new Person(name, age);
            expect(person.name).to.exist;
            expect(person.age).to.exist;

        });

        it('should have the "name" property equal Jake', function () {
            const name = 'Jake';
            const age = 25;
            const person = new Person(name, age);
            expect(person.name).to.equal('Jake');
        });

        it('should have the "age" property equal 25', function () {
            const name = 'Jake';
            const age = 25;
            const person = new Person(name, age);
            expect(person.age).to.equal(25);
        });

    });

    // Do not check if methods exist thats a waste of time
    describe('sayHello', function () {

        it('should return a string "Hello Jake"', function () {
            const name = 'Jake';
            const age = 25;
            const person = new Person(name, age);

            const greet = "Hello Jake";
            expect(person.sayHello()).to.equal(greet);
        });

    });

    describe('visit', function () {

        it('should accept an instance that represents a person from the Player class', function () {
            /*
            We are testing if person.visit accepts person2
            */
            const name = 'Jake';
            const age= 25;
            const person = new Person(name, age);

            const name2 = 'Samuel';
            const age2 = 26;
            const person2 = new Person(name2, age2);

            const visitSpy = sinon.spy(person, 'visit');

            person.visit(person2);

            expect(visitSpy.calledWith(person2)).to.be.true;
        });

        it('should return a string "Jake visited Samuel"', function () {
            const name = 'Jake';
            const age= 25;
            const person = new Person(name, age);

            const name2 = 'Samuel';
            const age2 = 26;
            const person2 = new Person(name2, age2);

            expect(person.visit(person2)).to.equal("Jake visited Samuel");
        });

    });

    describe('switchVisit', function () {

        /*
        There are two things we need to spy on: player.visit and otherPerson
        */
        it('should accept an instance called otherPerson', function () {
            const name = 'Jake';
            const age= 25;
            const person = new Person(name, age);

            const name2 = 'Samuel';
            const age2 = 26;
            const person2 = new Person(name2, age2);

            const switchVisitSpy = sinon.spy(person, 'switchVisit');

            person.switchVisit(person2);

            expect(switchVisitSpy.calledWith(person2)).to.be.true;
        });

        it('should call the player.visit', function () {
            const name = 'Jake';
            const age= 25;
            const person = new Person(name, age);

            const name2 = 'Samuel';
            const age2 = 26;
            const person2 = new Person(name2, age2);

            const visitSpy = sinon.spy(person, 'visit');

            person.switchVisit(person2);

            expect(visitSpy.calledOnce).to.be.true;
        });

        it('should return a string "Jake visited Samuel"', function () {
            const name = 'Jake';
            const age= 25;
            const person = new Person(name, age);

            const name2 = 'Samuel';
            const age2 = 26;
            const person2 = new Person(name2, age2);

            const actual = person.switchVisit(person2);
            const expected = 'Jake visited Samuel';

            expect(actual).to.be.equal(expected);
        });

    });

    describe('update', function () {

        context('is argument typeof object', function () {

            it('should have object have only a name or age property, should throw an error', function () {
                const name = 'Jake';
                const age= 25;
                const person = new Person(name, age);

                const obj1 = {name: 'Sam'};
                const obj2 = {age: 21};

                expect(() => person.update(obj1)).to.throw(Error);
                // Must have a message too

                expect(() => person.update(obj2)).to.throw(Error);
                // Must have a message too
            });

            it('should have a this.name and this.age property updated using obj', function () {
                const name = 'Jake';
                const age= 25;
                const person = new Person(name, age);

                const obj3 = {name: 'Sam', age: 21};
                const expected = {name: 'Sam', age: 21};

                person.update(obj3);

                expect(person.name).to.equal(expected.name);
                expect(person.age).to.equal(expected.age);

            });

        });

        context('is argument not typeof object', function () {

            it('should throw an Error', function () {
                const name = 'Jake';
                const age = 25;
                const person = new Person(name, age);

                const str = 'Hello';

                expect(() => person.update(str)).to.throw(Error);
                // We also need to test that an message is was outputed
            });

        });

    });

    describe('tryUpdate', function () {

        it('tryUpdate should invoke this.update', function () {
            const name = 'Jake';
            const age = 25;

            const person = new Person(name, age);
            const obj = {name: 'Sam', age: 21};

            const updateSpy = sinon.spy(person, 'update');
            person.tryUpdate(obj);

            expect(updateSpy.calledOnce).to.be.true;

            updateSpy.restore();
        });

        context('Invocation of Person.update was not successful', function () {

            it(`should return false if name is not a string AND age is not a number`, function () {
                /*
                What would cause update() to not successfully invoke
                type errors and not having properties throw an Error
                What would be a situation where it returns false?
                    A type mismatch: name and age
                */
                const name = 'Jake';
                const age = 25;

                const person = new Person(name, age);
                const obj = {name: 21, age: 'Sam'};

                expect(person.tryUpdate(obj)).to.be.false;
            });
        });

        context('Invocation of Person.update was successful', function () {

            it(`should return true that obj.name is a string and obj.age is a number`, function () {
                const name = 'Jake';
                const age = 25;

                const person = new Person(name, age);
                const obj = {name: 'Sam', age: 21};

                expect(person.tryUpdate(obj)).to.be.true;
            });
        });

    });

    describe('greetAll', function () {

        it('should accept an argument that represents an object', function () {
            // check if it accepted an object by spying
            const greetings = [new Person('Jake', 21), new Person('Sam', 21), new Person('Kyle', 26)];

            const greetAllSpy = sinon.spy(Person, 'greetAll');
            Person.greetAll(greetings);

            expect(greetAllSpy.calledWith(greetings)).to.be.true;

        });

        it('should return an empty array if the argument is not an object type', function () {
            const hello = 'hello';

            const actual = Person.greetAll(hello);
            const expected = [];

            expect(actual).to.deep.equal(expected);
        });

        // it('should use Array.map to iterate and call person.sayHello', function () {
        //     // We need to make sure during the iteration that it calls this.sayHello

        //     const greetings = [new Person('Jake', 21), new Person('Sam', 21), new Person('Kyle', 26)];
        //     const sayHelloSpy = sinon.spy(Person.prototype, 'sayHello');

        //     Person.greetAll(greetings);

        //     // Ensure that sayHello is called for each greeting in the array
        //     expect(sayHelloSpy.callCount).to.equal(greetings.length);

        //     sayHelloSpy.restore(); // Clean up the spy
        // });

        it('should return an array where each element repressent a string from calling person.sayHello', function () {
            // check the type of the result
            // check the elements in result are a string

            const greetings = [new Person('Jake', 21), new Person('Sam', 21), new Person('Kyle', 26)];
            const result = Person.greetAll(greetings);

            expect(result).to.be.a('array');

            for(let i = 0; i < result.length; i++) {
                const personGreet = result[i];

                expect(personGreet).to.be.a('string');
            }

        });

    });

})
