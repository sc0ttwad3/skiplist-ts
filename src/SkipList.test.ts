import {} from 'jest';
import SkipList from './SkipList';

describe('create SkipList', () => {
  let list: SkipList;

  beforeEach(() => {
    list = new SkipList();
  });

  afterEach(() => {
    list = null;
  })

  //
  it('should exist', () => {
    expect(list).toBeInstanceOf(SkipList);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  })

});
