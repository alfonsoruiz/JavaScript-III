/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window Binding
    When in the global scope the value of "this" will be the window/console object

* 2. Implicit Binding
    When a method on an object is called the value of "this" will be bound to the object on which the method is being called on.

* 3. New Binding
    When a new object is being created using a constructor "this"  will be bound to the new instance of the object being created.

* 4. Explicit Binding
    When use call or apply methods on an object "this" will be bound to whatever object we specify in the argument passed to the apply or call method.
*   
* write out a code example of each explanation above
*/

// Principle 1
function globalBinding() {
    console.log(this);
}

globalBinding();
// Principle 2
const cat = {
    name: 'Rupert',
    talk: function() {
        console.log(`Meow, my name is ${this.name}`);
    }
}

cat.talk();

// Principle 3
function Person(name) {
    this.name = name;
}

Person.prototype.talk = function() {
    console.log(`I'm ${this.name}`);
}

const bill = new Person('Bill');
const ted = new Person('Ted');

bill.talk();
ted.talk();

// Principle 4
function Matrix(name) {
    this.name = name;
}

Matrix.prototype.talk = function() {
    console.log(`I'm ${this.name}`);
}

const morpheus = new Matrix('Morpheus');
const keanu = new Matrix('Keanu');

morpheus.talk.call(keanu);
keanu.talk.call(morpheus);