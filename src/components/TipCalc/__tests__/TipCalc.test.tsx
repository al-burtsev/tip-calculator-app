import { test, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import App from '../../../App'

describe('Tip Calculator Full Suite', () => {
  const setup = () => ({
    user: userEvent.setup(),
    ...render(<App />),
  })

  // 1. SUCCESS PATH
  test('should calculate correct amounts for 15% tip and 2 people', async () => {
    const { user } = setup()

    await user.type(screen.getByLabelText(/bill/i), '100')
    await user.click(screen.getByRole('button', { name: '15%' }))
    await user.type(screen.getByLabelText(/number of people/i), '2')

    expect(screen.getByTestId('tip-amount')).toHaveTextContent('7.50')
    expect(screen.getByTestId('total-amount')).toHaveTextContent('57.50')
  })

  // 2. TIP SELECTION (PRESET vs CUSTOM)
  test('custom tip input should deactivate preset buttons', async () => {
    const { user } = setup()
    const presetBtn = screen.getByRole('button', { name: '10%' })
    const customInput = screen.getByPlaceholderText(/custom/i)

    await user.click(presetBtn)
    expect(presetBtn).toHaveAttribute('aria-pressed', 'true')

    await user.type(customInput, '25')
    expect(presetBtn).toHaveAttribute('aria-pressed', 'false')
  })

  // 3. EDGE CASES (ZERO VALIDATION)
  test('should show error message and red border when people is 0', async () => {
    const { user } = setup()
    const peopleInput = screen.getByLabelText(/number of people/i)

    await user.type(peopleInput, '0')

    expect(screen.getByText(/can't be zero/i)).toBeInTheDocument()
    expect(peopleInput).toHaveAttribute('aria-invalid', 'true')
  })

  // 4. RESET LOGIC
  test('should clear all values when reset is clicked', async () => {
    const { user } = setup()

    await user.type(screen.getByLabelText(/bill/i), '100')
    await user.click(screen.getByRole('button', { name: /15%/i }))
    await user.type(screen.getByLabelText(/number of people/i), '2')

    await user.click(screen.getByRole('button', { name: /reset/i }))

    expect(screen.getByTestId('total-amount')).toHaveTextContent('0.00')
    expect(screen.getByLabelText(/bill/i)).toHaveValue(null)
    expect(screen.getByRole('button', { name: /15%/i })).toHaveAttribute('aria-pressed', 'false')
  })

  test('reset button activation logic', async () => {
    const { user } = setup()
    const resetBtn = screen.getByRole('button', { name: /reset/i })

    expect(resetBtn).toHaveAttribute('aria-disabled', 'true')

    await user.type(screen.getByLabelText(/bill/i), '100')
    expect(resetBtn).toHaveAttribute('aria-disabled', 'false')
  })

  // 5. DATA INTEGRITY (NaN check)
  test('should display 0.00 if inputs are cleared', async () => {
    const { user } = setup()
    const billInput = screen.getByLabelText(/bill/i)

    await user.type(billInput, '100')
    await user.clear(billInput)

    expect(screen.getByTestId('total-amount')).toHaveTextContent('0.00')
  })
})
