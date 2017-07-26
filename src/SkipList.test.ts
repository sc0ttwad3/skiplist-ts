import {} from 'jest';
import {Comparator, Compare, Comparison, gt, isFunc, isString, isUndef, lt} from './common';
import { logBase, Node, SkipList } from './SkipList';

describe('create SkipList', () => {
  let list: SkipList;

  beforeEach(() => {
    list = new SkipList(2 ** 6);
  });

  afterEach(() => {
    list = null;
  })

  //
  it('should be a valid instance', () => {
    expect(list).toBeInstanceOf(SkipList);
  })

  it('maximum levels default or provided are correct', () => {
    expect(list.maxLevels).toEqual(Math.round(logBase(2 ** 6, 2)));
    const slistDefault = new SkipList();
    expect(slistDefault.maxLevels).toEqual(Math.round(logBase(2 ** 10, 2)));
  })

  it('head sentinel with lowest safe integer key', () => {
    expect(list.head.key).toEqual(Number.MIN_SAFE_INTEGER);
  });

  it('tail sentinel with largest safe integer key', () => {
    expect(list.tail.key).toEqual(Number.MAX_SAFE_INTEGER);
  });

  it('add nodes verify and maintain correct size property', () => {
    list.add(10, 'Ammie');
    list.add(-73, 'Caine');
    list.add(8, 'Becky');
    list.add(-610, 'Carrie');
    list.add(2112, 'Dan');
    list.add(137, 'Earl');
    list.add(0, 'Zedd');
    list.add(448, 'Patty');
    expect(list.size).toEqual(8)

    // Improve with order verification of nodes

  });

  it('find nodes return levelNum/-1 when non-existent', () => {
    list.add(10, 'Ammie');
    list.add(73, 'Caine');
    list.add(8, 'Becky');
    list.add(610, 'Carrie');
    expect(list.find(8)).toBeGreaterThan(0);
    expect(list.find(24)).toEqual(-1);

    // Improve with better return found functionality?

  });

  it('remove nodes return true/false when non-existent', () => {
    list.add(10, 'Ammie');
    list.add(73, 'Caine');
    list.add(8, 'Becky');
    list.add(610, 'Carrie');
    expect(list.remove(8)).toBeTruthy();
    expect(list.remove(24)).toBeFalsy();
  });

  it('can clear out all nodes', () => {
    list.add(10, 'Ammie');
    list.add(-73, 'Caine');
    list.add(8, 'Becky');
    list.add(-610, 'Carrie');
    list.add(2112, 'Dan');
    list.add(137, 'Earl');
    list.add(0, 'Zedd');
    list.add(448, 'Patty');
    list.clear();
    expect(list.size).toEqual(0);
  });

/* Tests for Built-ins that consume iterables */

  it('is iterable - can be consumed by for..of expressions', () => {
    list.add(10, 'Ammie');
    list.add(73, 'Caine');
    list.add(8, 'Becky');
    list.add(610, 'Carrie');

    expect(isFunc(list[Symbol.iterator])).toBeTruthy();
  })

  it('is iterable - mapping over node keys', () => {
    list.add(10, 'Ammie');
    list.add(73, 'Caine');
    list.add(8, 'Becky');
    list.add(610, 'Carrie');

    const refArr = list.kvps;
    const arr = [];

    for (const node of list) {
      const obj = { key: node.key, value: node.value };
      arr.push(obj);
    }

    expect(arr).toEqual(refArr);
  })

  it.skip('is iterable - mapping over node values', () => {
    list.add(10, 'Ammie');
    list.add(73, 'Caine');
    list.add(8, 'Becky');
    list.add(610, 'Carrie');
    // NEED TEST
  })

  it('is iterable - mapping over nodes' , () => {
    list.add(10, 'Ammie');
    list.add(73, 'Caine');
    list.add(8, 'Becky');
    list.add(610, 'Carrie');
    // NEED TEST
  })

});
