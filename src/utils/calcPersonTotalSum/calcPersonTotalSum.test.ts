import { test, expect } from 'vitest'
import calcPersonTotalSum from './calcPersonTotalSum'

test('test calc total sum', () => {
  expect(calcPersonTotalSum(142.55, 15, 5)).toBe("32.79")
})