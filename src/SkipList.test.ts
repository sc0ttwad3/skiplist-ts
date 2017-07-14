import {} from 'jest';
import SkipList from './SkipList';
import { logBase } from './SkipList';

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

  it('add nodes maintain correct size property', () => {
    list.add(10, 'Ammie');
    list.add(-73, 'Caine');
    list.add(8, 'Becky');
    list.add(-610, 'Carrie');
    list.add(2112, 'Dan');
    list.add(137, 'Earl');
    list.add(0, 'Zedd');
    list.add(448, 'Patty');
    expect(list.size).toEqual(8)
  });

});
