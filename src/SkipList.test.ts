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

});
