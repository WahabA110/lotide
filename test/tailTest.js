const assertEqual = require('../assertEqual');
const tail = require('../tail');

const empty = [];
const word = ["Yo Yo"];
const words = ["Yo Yo", "Lighthouse", "Labs"];


assertEqual(tail(empty).length, 0);
assertEqual(tail(empty)[0], undefined);

assertEqual(tail(word).length, 0);
assertEqual(tail(word)[0], undefined);

assertEqual(tail(words).length, 2);
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words)[1], "Labs");