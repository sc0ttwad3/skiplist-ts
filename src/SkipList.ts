
/* existy(x) - define the existence of something and not null or undefined */
const existy  = (x: any): boolean => x != null;
const truthy  = (x: any): boolean => (x !== false) && existy(x);
const logBase = (n: number, base: number): number => Math.log(n) / Math.log(base);

// An element of the SkipList data-structure
class Node {
  key: number;
  value: any;
  next: any;
  topLevel: number;

  constructor(key: number, value: any, topLevel: number) {
    this.key = key;
    this.value = value;
    this.next = [];
    this.topLevel = topLevel;
  }
}

export default class SkipList {
  static MAX_LEVEL: number = Math.round(logBase(2 ** 32, 2));

  head: Node;
  tail: Node;
  maxLevels: number;
  numNodes: number;
}
