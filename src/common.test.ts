import {} from 'jest';
import {Comparator, Compare, Comparison, eq, gt, isFunc, isString, isUndef, lt, reverse} from './common';
import {logBase, Node, SkipList} from './SkipList';

describe('verify common types and functions', () => {
  let list: SkipList;

  beforeEach(() => {
    list = new SkipList(2 ** 6);
  });

  afterEach(() => {
    list = null;
  })

  it('isFunc function', () => {
    const t = (x) => x;
    expect(isFunc(t)).toBeTruthy();
    expect(isFunc(1234)).toBeFalsy();
    expect(isFunc(['a', 'b', 'c'])).toBeFalsy();
  })

  it('isUndef function', () => {
    expect(isUndef(undefined)).toBeTruthy();
    expect(isUndef(1234)).toBeFalsy();
    expect(isUndef(['a', 'b', 'c'])).toBeFalsy();
  })

  it('isString function', () => {
    expect(isString('Hello')).toBeTruthy();
    expect(isString(1234)).toBeFalsy();
    expect(isString(['a', 'b', 'c'])).toBeFalsy();
  })

  it('gt: Comparator<number> greater than function', () => {
    expect(gt(1, 2)).toBeTruthy();
    expect(gt(2, 1)).toBeFalsy();
    expect(gt(2, 2)).toBeFalsy();
  })

  it('lt: Comparator<number> less than function', () => {
    expect(lt(2, 1)).toBeTruthy();
    expect(lt(1, 2)).toBeFalsy();
    expect(lt(2, 2)).toBeFalsy();
  })

  it('eq: Comparator<number> equality function', () => {
      expect(eq(3, 3)).toBeTruthy();
      expect(eq(3, 5)).toBeFalsy();
  })

  it('can reverse items<T> in an array ', () => {
    // PLACEHOLDER TESTS
    expect(eq(3, 3)).toBeTruthy();
    expect(eq(3, 5)).toBeFalsy();
  })
});
