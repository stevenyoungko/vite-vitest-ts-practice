import { describe, expect, it } from 'vitest';
import { fromPairs } from './';

describe('lodash.fromPairs', () => {
  it('should return an object in basic usage', () => {
    const pairs = [
      ['code', 'farmer'],
      ['try', 'to'],
      ['keep', 'growing'],
    ];

    expect(fromPairs(pairs)).toEqual({
      code: 'farmer',
      try: 'to',
      keep: 'growing',
    });
  });

  it('should filter out invalid key', () => {
    const pairs = [
      [null, 'null'],
      [undefined, 'undefined'],
      [0, 'zero'],
      [3.14, 'floating number'],
    ];

    expect(fromPairs(pairs)).toEqual({
      '0': 'zero',
      '3.14': 'floating number',
    });
  });

  it('should filter out invalid value at second level', () => {
    const pairs = [['code', 'farmer'], ['try'], ['keep', 'growing']];

    expect(fromPairs(pairs)).toEqual({ code: 'farmer', keep: 'growing' });
  });
});
