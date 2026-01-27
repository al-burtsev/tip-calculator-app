interface TipButtonProps {
  value: number;
  isActive: boolean;
  onClick: () => void;
}

const TipButton = ({ value, isActive, onClick }: TipButtonProps) => {
  const baseStyle = 'p-4 rounded-md text-white font-bold cursor-pointer transition-colors';
  const activeStyle = isActive
    ? 'bg-primary text-neutral-900'
    : 'bg-neutral-900 hover:bg-neutral-500';

  return (
    <button
      type='button'
      className={`${baseStyle} ${activeStyle}`} onClick={onClick}>
      {value}%
    </button>
  );
};

export default TipButton;
