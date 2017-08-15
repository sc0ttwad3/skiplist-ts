import { logBase, Node, SkipList } from './SkipList';
// why using require, instead of import?
const chalk = require('chalk');
// const R = require('ramda');

/***********************************************************
 *   Testing: to be removed and Unit Tests created!
*/

const slist = new SkipList(2 ** 6); // exp = max num of levels
// console.log('\nCreated a SkipList...\n');
// console.log(slist);
slist.add(10, 'Ammie');
slist.add(73, 'Caine');
slist.add(8, 'Becky');
slist.add(-88, 'BoogieWoogie');
slist.add(610, 'Carrie');
slist.add(2112, 'Dan');
slist.add(137, 'Earl');
slist.add(5299, 'Zedd');
slist.add(448, 'Patty');
// console.log(slist.keys);
console.log(chalk.bold.blue(`Added ${slist.size} nodes...`))
console.log('\n');
console.log(slist.find(9000));
console.log(slist.find(73));
console.log(slist.remove(610));
console.log(chalk.bold.blue('\nRemoved node (610) ...'));
// console.log(slist.keys);
console.log(`Size: ${slist.size}`)
console.log('\n');


console.log(chalk.green.bold('\nLarger SkipList of 10000 nodes ( random keys between 0 and 9999...'));

const genRndIntArray = () => {
  const arrOne = [];
  let i = 10000;
  for (; i >= 0; --i) {
    arrOne.push(Math.floor(Math.random() * 9999));
  }
  return arrOne;
}

console.log('Generating random dataset...\n');
const dataset = genRndIntArray();

console.log('Created SkipList');
const slistBig = new SkipList(2 ** 6);

console.log(chalk.bold.blue('Adding nodes...'))
dataset.forEach(x => {
  slistBig.add(x, x);
})
console.log(chalk.green.bold(`Done adding ${slistBig.size} nodes!\n`));

console.log(chalk.blue.bold('Find the key 73\n'));
const found = slistBig.find(73);
if (found >= 0) {
  console.log(chalk.blue.bold(`Found at level: ${found}`));
} else {
  console.log(chalk.red('Not found.'));
}


/*
const dataArr = [1,2,3,4,5];
const doubler = x => { return x + x; };
let doubled = dataArr.map(doubler);
console.log(doubled);

console.log(chalk.bold.blue('\nCreating and testing a functor...'));

const trace = x => {
  console.log(x);
  return x;
};

const Identity = val => ({
  map: fn => Identity(fn(val))
});

const u = Identity(2);
const f = x => x + 1;
const g = x => x * 2;

u.map(trace);
u.map(x => x).map(trace);

const r1 = u.map(x => f(g(x)));
const r2 = u.map(g).map(f);
r1.map(trace);
r2.map(trace);

// slist.mapWith(x => console.log(x));

// console.log(`Maxium Node Height: ${SkipList.MAX_LEVEL}`);
// Maximum Size of SkipList
// console.log('Total Possible Nodes:' + (2 * Number.MAX_SAFE_INTEGER) + 1);

console.log('\nSymbol iterator: spread/destructuring');
console.log([...slist]);

  // destructuring for...in with Iteraor object
console.log('\nSymbol iterator: for..NODE of..slist...');
for (let node of slist) {
  let k = node.key;
  let v = node.value;
  let kvm = {k, v};
  console.log(kvm);
}

  // destructuring for...in with kvps Iteraor object
console.log('\nSymbol iterator: for..KVP of..slist.kvps...');
for (let kvp of slist.kvps) {
  console.log(kvp);
}
*/

console.log('-----------------------------------------------------');
/*
console.log('\n');
console.log(chalk.blue.bold('Mapping over SkipList node.values...'))
let mv = slist.mapValues(x => x);
console.log(mv);
// Need to look into 1/2 way down page (Coffee labels at Saltsprings image)
// https://leanpub.com/javascriptallongesix/read#iterables
console.log('\n');
console.log(chalk.blue.bold('Map over SkipList nodes...'))
let mn = slist.map(x => x);
console.log(mn);

console.log('\n');
console.log(chalk.blue.bold('Mapping over SkipList node.keys...'))
let mk = slist.mapKeys(x => x);
console.log(mk);

console.log('\n');
console.log(chalk.blue.bold('Ramda mapping over node keys...'))
let result1 = R.map(x => x ** 2, slist.keys);
console.log(result1);

console.log('\n');
console.log(chalk.blue.bold('Filter over SkipList node values...'))
let result = slist.values.filter(x => x === 'Becky' || x === 'Zedd');
console.log(result);

/*
console.log('\n');
console.log(chalk.blue.bold('Ramda filter over node values...'))
let result2 = R.filter(x => (x === 'Becky' || x === 'Zedd'), slist.values);
console.log(result2);
*/

console.log('\n');
console.log(chalk.blue.bold('Reducing node values...'))
const result19 = "Not yet implemented.";
// let result19 = slist.reduce(R.subtract, 0, slist.keys);
console.log(result19);
/*
console.log('\n');
console.log(chalk.blue.bold('Ramda reducing node values...'))
let result9 = R.reduce(R.subtract, 0, slist.keys);
console.log(result9);
*/

/* Test built-ins that consume Iterables */
console.log('\n');
console.log(chalk.blueBright.bold('Trying to do a for..of'))
for (const node of slist) {
  console.log(node);
}

console.log('\n\n\n');
console.log(chalk.blue('Trying to an Array.from...'))
console.log(Array.from(slist));

console.log('\n\n\n');
console.log(chalk.blue('Trying out spread/rest/destructuring functionality...'))

const fooRest = (...args) => console.log(args)
console.log(fooRest(slist));

const [x, y, ...z] = slist;
console.log(`x.value: ${x.value}`)
console.log(`y.key: ${y.key}`)
console.log(`z: ${z[0].key}`)

console.log(chalk.blue('\nSearch for key 2112 ...'));
console.log(slist.search(2112)); // return key value

console.log(chalk.blue('\nSearch the key 999 ...'));
console.log(slist.search(999)); // undefined
