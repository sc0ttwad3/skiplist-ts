/* Generic comparison associated types */

/*
  Notes:

  Recommended to use == null to check for both undefined or null
  Don't use it for root level things!!!!!

  To check if a variable is defined or not at a global level,
  use (typeof someglobal !== 'undefined')

  Example:
  if (typeof someglobal !== 'undefined') {
    // someglobal is now safe to use
    console.log(someglobal);
  }

interface IEqualsFunction<T> {
  equals(value: T): number;
}

*/

/*****
 *
 * TYPES for Comparisons
 *
 *
 * There is also a NPM module
 * https://github.com/justindoherty/ts-comparators
 *
 * that has more functionality for chaining, etc.
 *
 */
export type Comparator<T> = (a: T, b: T) => boolean;
export type Comparison<T> = (a: T, b: T) => number;
export type Compare = <T>(test: Comparator<T>) => Comparison<T>;

export const compare: Compare = (test) => (a, b) =>
    test(a, b) ? -1
  : test(b, a) ?  1
  : 0;

//
export const isFunc = (f: any): boolean => (typeof f) === 'function'
export const isUndef = (o: any): boolean => (typeof o) === 'undefined'

export function isString(obj: any): boolean {
  return Object.prototype.toString.call(obj) === '[object String]';
}

//
// function defaultCompare<T>(a: T, b: T): number
export const gt: Comparator<number> = (a, b) => b > a;
export const lt: Comparator<number> = (a, b) => b < a;
export const eq: Comparator<number> = (a, b) => b === a;

export const sortNumAsc  = compare(gt);
export const sortNumDesc = compare(lt);

// Need to limit Types to Nodes?
  //
export function reverse<T>(items: T[]): T[] {
  const toreturn = [];
  for (let i = items.length - 1; i >= 0; i--) {
      toreturn.push(items[i]);
  }
  return toreturn;
}

/*
  Need comparators for smallest Int and largest Int --
  to possible remove the sentinel nodes from the list itself!

  https://github.com/bevacqua/es6#number
  look into use Number.isSafeInteger instead?

  largerThanSmallestSentinelNode
  smallerThanLargestSentinelNode

*/
