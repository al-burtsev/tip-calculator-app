import { memo } from 'react';
interface TipButtonProps {
  value: number;
  isActive: boolean;
  onClick: (val: number) => void;
}

const TipButton = ({ value, isActive, onClick }: TipButtonProps) => {
  const baseStyle = 'p-2 rounded-md text-2xl font-bold cursor-pointer transition-colors duration-300 ease-out';
  const activeStyle = isActive
    ? 'bg-primary text-neutral-900'
    : 'bg-neutral-900 text-white hover:bg-neutral-500 focus:outline-2 focus:outline-primary focus:bg-neutral-200 focus:text-neutral-900';

  return (
    <button
      type='button'
      aria-pressed={isActive} 
      className={`${baseStyle} ${activeStyle}`} onClick={() => onClick(value)}>
      {value}%
    </button>
  );
};

export default memo(TipButton)
