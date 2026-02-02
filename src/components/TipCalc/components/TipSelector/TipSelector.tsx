import TIP_VALUES from '../../../../constants/tips'
import TipButton from '../TipButton/TipButton';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

interface TipSelectorProps {
  selectedTip: string;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onTipChange: (value: number | string) => void;
}

const TipSelector = ({ selectedTip, onTipChange, onKeyDown }: TipSelectorProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const selectedTipNum = Number(selectedTip)

  const handleBtnClick = useCallback((val: number) => {
    onTipChange(val)
    setIsFocused(false)
  }, [onTipChange])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    onTipChange(val)
  }, [onTipChange])

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.select()
    setIsFocused(true)
  }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.currentTarget.blur()
      }
      onKeyDown(e)
    }

  useEffect(() => {
    if (!inputRef.current) return

    if (isFocused) {
      inputRef.current.select()
    } else {
      inputRef.current.blur()
    }

  }, [isFocused])

  return (
    <div className='text-neutral-500 grid'>
      <label htmlFor='custom-tip'
        className='mb-3 font-bold md:mb-4'
      >
        Select Tip %
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {TIP_VALUES.map(tip => (
          <TipButton
            key={tip}
            value={tip}
            isActive={selectedTipNum === tip && !isFocused}
            onClick={handleBtnClick}
          />
        ))}

        <input
          id='custom-tip'
          ref={inputRef}
          type="number"
          inputMode="decimal"
          min='0'
          max='500'
          placeholder="Custom"
          onBlur={() => setIsFocused(false)}
          onClick={handleInputClick}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={!isFocused && TIP_VALUES.includes(selectedTipNum) ? '' : selectedTip}
          className='no-number-bar bg-neutral-50 text-neutral-900 text-right font-bold text-2xl rounded-sm px-2 md:pe-4 md:text-(length:--tip-select-fz) focus-visible:outline-primary focus-visible:outline-2 lg:hover:outline-primary lg:hover:outline-2' />
      </div>
    </div>
  )
}

export default memo(TipSelector)