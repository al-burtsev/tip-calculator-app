import TIP_VALUES from '../../../../constants/tips'
import TipButton from '../TipButton/TipButton';
import { memo, useCallback, useState } from 'react';

interface TipSelectorProps {
  selectedTip: string;
  onKeyDown: (event: React.KeyboardEvent) => void;
  onTipChange: (value: number | string) => void;
}

const TipSelector = ({ selectedTip, onTipChange, onKeyDown }: TipSelectorProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const selectedTipNum = Number(selectedTip)

  const handleBtnClick = useCallback((val: number) => {
    onTipChange(val)
    setIsFocused(false)
  }, [onTipChange])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onTipChange(val);
  }

  const handleInputFocus = () => {
    setIsFocused(true)
  }

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.select()
  }

  return (
    <div className='text-neutral-500 grid'>
      <label htmlFor='custom-tip'
        className='mb-3 font-bold'
      >
        Select Tip %
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-3">
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
          className='bg-neutral-200 text-neutral-900 text-right font-bold text-2xl rounded-sm pe-4 hocus:outline-primary hocus:outline-2' />
      </div>
    </div>
  )
}

export default memo(TipSelector)