import {} from 'jest';
import {Comparator, Compare, Comparison, gt, isFunc, isString, isUndef, lt} from './common';
import {logBase} from './SkipList';
import SkipList from './SkipList';

describe('verify common types and functions', () => {

  it('isString function', () => {
    expect(isString('Hello')).toBeTruthy();
    expect(isString(1234)).toBeFalsy();
    expect(isString(['a', 'b', 'c'])).toBeFalsy();
  })

  it('isUndef function', () => {
    expect(isUndef(undefined)).toBeTruthy();
    expect(isUndef(1234)).toBeFalsy();
    expect(isUndef(['a', 'b', 'c'])).toBeFalsy();
  })
});
