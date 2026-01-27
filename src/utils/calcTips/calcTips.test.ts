import { expect, test } from 'vitest'
import calcTips from './calcTips.ts'

test('test calc tips', () => {
  expect(calcTips(142.55, 15, 5)).toBe("4.28")
})