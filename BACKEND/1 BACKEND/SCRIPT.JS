console.log("Hello, World!");
// const someValue = require('./math');
// console.log(someValue);
// const fruits = require('./fruits');
// console.log(fruits);
import {sum, pi} from "./math.js";
console.log(sum(5, 10));
console.log(pi);

import {generate} from "random-words";
console.log(generate(100));

