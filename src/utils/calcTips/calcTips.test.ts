import { expect, test, describe } from 'vitest'
import { calcTips } from './calcTips.ts'

test('Base logic: correctly calculates tips', () => {
  expect(calcTips(25, 5, 1)).toMatchInlineSnapshot(`"1.25"`)
  expect(calcTips(200, 15, 3)).toMatchInlineSnapshot(`"10.00"`)
  expect(calcTips(330.5, 50, 5)).toMatchInlineSnapshot(`"33.05"`)
  expect(calcTips(1025.55, 5, 15)).toMatchInlineSnapshot(`"3.42"`)
  expect(calcTips(1420.95, 7, 50)).toMatchInlineSnapshot(`"1.99"`)
})

describe('Edge cases', () => {
  test('should return "0.00" if number of people is zero', () => {
    expect(calcTips(100, 15, 0)).toMatchInlineSnapshot('"0.00"');
  });

  test('should return "0.00" for negative number of people', () => {
    expect(calcTips(100, 15, -1)).toMatchInlineSnapshot('"0.00"');
  });

  test('should return "0.00" when bill amount is zero', () => {
    expect(calcTips(0, 15, 2)).toMatchInlineSnapshot('"0.00"');
  });
});