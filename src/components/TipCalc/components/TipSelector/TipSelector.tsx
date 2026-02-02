import TIP_VALUES from '../../../../constants/tips'
import TipButton from '../TipButton/TipButton';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

interface TipSelectorProps {
  selectedTip: string;
  onKeyDown: (event: React.KeyboardEvent) => void;
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

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.select()
    setIsFocused(true)
  }

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.select()
  }

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.select()
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
          min='0'
          max='500'
          placeholder="Custom"
          onFocus={handleInputFocus}
          onBlur={() => setIsFocused(false)}
          onClick={handleInputClick}
          onChange={handleInputChange}
          onKeyDown={onKeyDown}
          value={!isFocused && TIP_VALUES.includes(selectedTipNum) ? '' : selectedTip}
          className='no-number-bar bg-neutral-50 text-neutral-900 text-right font-bold text-2xl rounded-sm px-2 md:pe-4 md:text-(length:--tip-select-fz) hocus:outline-primary hocus:outline-2' />
      </div>
    </div>
  )
}

export default memo(TipSelector)