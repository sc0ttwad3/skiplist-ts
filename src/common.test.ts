import {} from 'jest';
import {Comparator, Compare, Comparison, gt, isFunc, isString, isUndef, lt} from './common';
import {logBase} from './SkipList';
import SkipList from './SkipList';

describe('verify common types and functions', () => {

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

  it('gt: Comparator<number> function', () => {
    expect(gt(1, 2)).toBeTruthy();
    expect(gt(2, 1)).toBeFalsy();
    expect(gt(2, 2)).toBeFalsy();
  })

  it('lt: Comparator<number> function', () => {
    expect(lt(2, 1)).toBeTruthy();
    expect(lt(1, 2)).toBeFalsy();
    expect(lt(2, 2)).toBeFalsy();
  })
});
