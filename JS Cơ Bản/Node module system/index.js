const Mouse = require('./Mouse');
const Cat = require('./Cat');
var Jax = new Mouse("black");
var Jerry = new Mouse("yellow");

console.log(Jax);
console.log(Jerry);

let Tom = new Cat();

Tom.eat(Jax);
Tom.eat(Jerry);

console.log(Tom);

