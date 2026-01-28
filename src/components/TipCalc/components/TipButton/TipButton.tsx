interface TipButtonProps {
  value: number;
  isActive: boolean;
  onClick: () => void;
}

const TipButton = ({ value, isActive, onClick }: TipButtonProps) => {
  const baseStyle = 'p-2 rounded-md text-2xl font-bold cursor-pointer transition-colors duration-300 ease-out';
  const activeStyle = isActive
    ? 'bg-primary text-neutral-900'
    : 'bg-neutral-900 text-white hover:bg-neutral-500';

  return (
    <button
      type='button'
      className={`${baseStyle} ${activeStyle}`} onClick={onClick}>
      {value}%
    </button>
  );
};

export default TipButton;
