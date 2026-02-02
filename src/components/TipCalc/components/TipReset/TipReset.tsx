import { memo } from 'react'

interface ResetProps {
  isActive: boolean;
  onClick: () => void
}

const TipReset = ({ isActive, onClick }: ResetProps) => {

  const baseStyles = 'rounded-sm uppercase text-xl font-bold w-full mt-2.5 px-2 py-2 md:mt-0 md:py-3 md:self-end cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-primary transition-colors duration-300 ease-in'
  const activeStyles = isActive ? 'bg-primary text-neutral-900 hocus:bg-primary-100' : 'bg-primary/20 text-neutral-900/40 pointer-events-none'
  
  return (
    <button
      type='button'
      onClick={onClick}
      aria-disabled={!isActive}
      className={`${baseStyles} ${activeStyles}`}
    >
      reset
    </button>
  )
}

export default memo(TipReset)