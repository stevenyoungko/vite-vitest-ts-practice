import { describe, expect, test } from 'vitest';
import { argumentsLength } from './';

describe('argumentsLength', () => {
  test('argumentsLength should return 1 when passed one argument', () => {
    expect(argumentsLength(5)).toBe(1);
  });

  // 範例二
  test('argumentsLength should return 3 when passed three arguments', () => {
    expect(argumentsLength({}, null, '3')).toBe(3);
  });
});
