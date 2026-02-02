import { test, expect, describe } from 'vitest'
import { calcPersonTotalSum } from './calcPersonTotalSum'

test('Base logic: correctly calculates total per person with different tips', () => {
  expect(calcPersonTotalSum(25, 5, 1)).toMatchInlineSnapshot(`"26.25"`)
  expect(calcPersonTotalSum(200, 15, 3)).toMatchInlineSnapshot(`"76.67"`)
  expect(calcPersonTotalSum(330.5, 50, 5)).toMatchInlineSnapshot(`"99.15"`)
  expect(calcPersonTotalSum(1025.55, 5, 15)).toMatchInlineSnapshot(`"71.79"`)
  expect(calcPersonTotalSum(1420.95, 7, 50)).toMatchInlineSnapshot(`"30.41"`)
})

describe('Edge cases', () => {
  test('should return "0.00" if number of people is zero', () => {
    expect(calcPersonTotalSum(100, 15, 0)).toMatchInlineSnapshot('"0.00"');
  });

  test('should return "0.00" for negative number of people', () => {
    expect(calcPersonTotalSum(100, 15, -1)).toMatchInlineSnapshot('"0.00"');
  });

  test('should return "0.00" when bill amount is zero', () => {
    expect(calcPersonTotalSum(0, 15, 2)).toMatchInlineSnapshot('"0.00"');
  });
});