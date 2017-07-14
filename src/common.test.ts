import {} from 'jest';
import {defaultCompare, has, ICompareFunction, IEqualsFunction, ILoopFunction} from './common';
import SkipList from './SkipList';
import {logBase} from './SkipList';

describe('verify common types and functions', () => {
  it('compare types correctly', () => {
    const compFunc: ICompareFunction<number> = (a, b) => {
      if (a < b) {
        return -1;
      }
    }
  })
});
