// every file is module in nodejs
// Modules - Encapsulated code(only share minimum)
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavours");
console.log(names)
console.log(data);

// invoking a module that has some function in it.
// an identifier is optional.
require("./7-mind-grenade");

sayHi('Susan');
sayHi(names.john);
sayHi(names.judo);