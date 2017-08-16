/*****************************
 *
 * Advanced and
 * Additional Custom
 * Tpes
 *
 * See:
 * http://www.typescriptlang.org/docs/handbook/advanced-types.html
 *
*/

/*  Built-In ------------
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
}

type Partial<T> = {
  [P in keyof T]?: T[P];
}

type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
}

type Record<K extends string, T> = {
    [P in K]: T;
}

*/

type Nullable<T> = { [P in keyof T]: T[P] | null }

interface IProxy<T> {
  get(): T;
  set(value: T): void;
}

type Proxify<T> = {
  [P in keyof T]: IProxy<T[P]>;
}

function unproxify<T>(t: Proxify<T>): T {
  const result = {} as T;
  // tslint:disable-next-line:forin
  for (const k in t) {
      result[k] = t[k].get();
  }
  return result;
}
//
// let originalProps = unproxify(proxyProps);
//
//

/*
function proxify<T>(o: T): Proxify<T> {
  // ... wrap proxies ...
}
let proxyProps = proxify(props);
*/

/**
 * Diff and Omit
 *  used to create an identical type without certain omitted properties
 */
type Diff<T extends string, U extends string> = (
  {[P in T]: P } & {[P in U]: never } & { [x: string]: never }
)[T];

type Omit<T, K extends keyof T> = {[P in Diff<keyof T, K>]: T[P]};

// type TCleanedUser = Omit<IUser, 'privateField1' | 'privateField2'>;

interface INode {
  key: number;
  value: any;
  next: any;
  topLevel: number;
}

type CleanNode = Omit<INode, 'next' | 'topLevel'>;

/* Example from TS docs

type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
    name: string;
}

var people: LinkedList<Person>;
var s = people.name;
var s = people.next.name;
var s = people.next.next.name;
var s = people.next.next.next.name;

*/

interface IPerson {
  name: string;
  age: number;
}

const jarid: IPerson = {
  name: 'Jarid',
  age: 35,
};

//
// keyof
// - index type query operator
// - gets the compiler to check code that uses dynamic property names.
//
// T[K]
// - indexed access operator
// - This type syntax reflects the expression syntax
//

// no real type checking at all
/*
function pluck(o, names) {
  return names.map(n => o[n]);
}
*/

// And this is the full type-checked version
function pluck<T, K extends keyof T>(o: T, propNames: K[]): Array<T[K]> {
  return propNames.map(n => o[n])
}

let currentAge: number[] = pluck(jarid, ['age']);
// console.log(`Age: ${currentAge}`)

//
// 'keyof IPerson' is interchangeable with
// 'name' | 'age'
let personProps: keyof IPerson;

//
//
function getProp<T, K extends keyof T>(o: T, propName: K): T[K] {
  return o[propName]
}

const nm: string = getProp(jarid, 'name')
const ag: number = getProp(jarid, 'age')
// console.log(`Name: ${nm}, Age: ${ag}`)
