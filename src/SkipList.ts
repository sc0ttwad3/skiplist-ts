
/* existy(x) - define the existence of something and not null or undefined */
export const existy  = (x: any): boolean => x != null;
export const truthy  = (x: any): boolean => (x !== false) && existy(x);
export const logBase = (n: number, base: number): number => Math.log(n) / Math.log(base);

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

}
