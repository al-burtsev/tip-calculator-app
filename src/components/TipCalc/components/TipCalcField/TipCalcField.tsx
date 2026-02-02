import React, { memo, useCallback } from 'react';

interface TipCalcFieldProps {
  id: string;
  label: string;
  icon: string;
  inputVal: string;
  isError?: boolean;
  error?: string;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TipCalcField = (props: TipCalcFieldProps) => {
  const { id, label, inputVal, isError, error, icon, onChange, onKeyDown } = props

  const handleInputClick = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.select()
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur()
    }
    onKeyDown(e)
  }, [onKeyDown])

  return (
    <div className='text-neutral-500 font-main grid md:relative'>

      <label htmlFor={id}
        className='mb-1 font-bold justify-self-start'
      >
        {label}
      </label>
      {error && <div className='flex justify-end mb-2 text-attention font-bold md:absolute md:right-0 md:top-0 md:mb-0'>{error}</div>
      }
      <div className='relative'>
        <img
        src={icon}
        alt=""
        className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
      />
        <input
          id={id}
          name={id}
          type="number"
          inputMode="decimal"
          min='0'
          placeholder='0'
          value={inputVal}
          aria-invalid={isError}
          onClick={handleInputClick}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          className={`no-number-bar bg-neutral-50 text-neutral-900 text-2xl leading-none font-bold text-right rounded-sm py-2 ps-8 pe-4 w-full focus-visible:outline-2 lg:hover:outline-2 selection:bg-primary ${error ? 'outline-attention outline-2 focus-fisible:outline-attention lg:hover:outline-attention' : 'focus-visible:outline-primary lg:hover:outline-primary'}`} />
      </div>
    </div>
  )
}

export default memo(TipCalcField)