import {Comparator, Compare, Comparison, gt, isFunc, isString, isUndef, lt} from './common';

/* existy(x) - define the existence of something and not null or undefined */
export const existy  = (x: any): boolean => x != null;
export const truthy  = (x: any): boolean => (x !== false) && existy(x);
export const logBase = (n: number, base: number): number => Math.log(n) / Math.log(base);

// An element of the SkipList data-structure
export class Node {
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

export class SkipList {
  static MAX_LEVEL: number = Math.round(logBase(2 ** 32, 2));

  head: Node;
  tail: Node;
  maxLevels: number;
  numNodes: number;

  constructor(max: number = 2 ** 10) {
    if (existy(max)) {
      SkipList.MAX_LEVEL = Math.round(logBase(max, 2));
    }
    this.maxLevels = SkipList.MAX_LEVEL;
    // sentinel node creation
    //
    //  https://github.com/bevacqua/es6#number
    //  look into use Number.isSafeInteger instead?
    //
    this.head = new Node(
      Number.MIN_SAFE_INTEGER,
      Number.MIN_SAFE_INTEGER,
      this.maxLevels,
    );
    this.tail = new Node(
      Number.MAX_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER,
      this.maxLevels,
    );

    let i: number = 0;
    for (; i <= SkipList.MAX_LEVEL; i++) {
      this.head.next[i] = this.tail;
    }
    this.numNodes = 2;  // head/tail sentinels

  }

  add(key: number, value: any): boolean {
    const topLevel: number = this._randomLevel(1, this.maxLevels);
    const priors: Node[] = new Array(this.maxLevels + 1);
    const afters: Node[] = new Array(this.maxLevels + 1);

    while (true) {
      const lFound: number = this.find(key, priors, afters);
      if (lFound !== -1) { break; }
      let prior: Node;
      let after: Node;
      let valid: boolean = true;
      let level: number = 0;
      for (; valid && (level <= topLevel); level++) {
        prior = priors[level];
        after = afters[level];
        prior.next[level] === after ? valid = true : valid = false;
      }
      if (!valid) { return false; }

      const newNode: Node = new Node(key, value, topLevel);
      level = 0;
      for (; level <= topLevel; level++) {
        newNode.next[level] = afters[level];
      }
      level = 0;
      for (; level <= topLevel; level++) {
        priors[level].next[level] = newNode;
      }
      this.numNodes++;
      return true;
    }
  }

  find(key: number, priors: Node[] = [], afters: Node[] = []): number {
    let lFound: number = -1;
    let prior: Node = this.head;
    let level: number = this.maxLevels;
    for (; level >= 0; level--) {
      let current: Node = prior.next[level];
      while (current.key < key) {
        prior = current;
        current = prior.next[level];
      }
      if (key === current.key && lFound === -1) {
        lFound = level;
      }
      priors[level] = prior;
      afters[level] = current;
    }
    return lFound;
  }

  remove(key: number): boolean {
    const bottomLevel: number = 0;
    const priors: Node[] = new Array(this.maxLevels + 1);
    const afters: Node[] = new Array(this.maxLevels + 1);

    while (true) {
      const found: number = this.find(key, priors, afters);
      if (found === -1) { return false; }
      const victim: Node = afters[found];
      let level = victim.topLevel;
      for (; level >= bottomLevel; level--) {
        afters[level] = victim.next[level];
        priors[level].next[level] = afters[level];
      }
      this.numNodes--;
      return true;
    }
  }

  toArray(): any[] {
    return this.kvps;
  }

  // Need to better Type this function
  // among other issues
  get kvps(): any[] {
    let current: Node = this.head.next[0];
    const arr = [];
    while (current !== this.tail) {
      const k = current.key;
      const v = current.value;
      arr.push({key: k, value: v});
      current = current.next[0];
    }
    return arr;
  }

  clear() {
    this.head = new Node(
      Number.MIN_SAFE_INTEGER,
      Number.MIN_SAFE_INTEGER,
      this.maxLevels,
    );
    this.tail = new Node(
      Number.MAX_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER,
      this.maxLevels,
    );

    let i: number = 0;
    for (; i <= SkipList.MAX_LEVEL; i++) {
      this.head.next[i] = this.tail;
    }
    this.numNodes = 2;  // head/tail sentinels
  }

  get size(): number {
    // Sentinel nodes not included
    return this.numNodes - 2;
  }

  //
  //
  private _randomLevel(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
