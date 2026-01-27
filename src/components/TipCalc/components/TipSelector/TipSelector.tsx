import predefinedTips from '../../../../constants/tips'
import TipButton from '../TipButton/TipButton';


interface TipSelectorProps {
  selectedTip: number;
  onKeyDown: (event: React.KeyboardEvent) => void;
  onTipChange: (value: number | string) => void;
}

const TipSelector = ({ selectedTip, onTipChange, onKeyDown }: TipSelectorProps) => {
  return (
    <div className='text-black'>
      <label htmlFor='custom-tip'
        className=''
      >
        Select Tip %
      </label>
      <div className="grid grid-cols-3 gap-3">
        {predefinedTips.map(tip => (
          <TipButton
            key={tip}
            value={tip}
            isActive={selectedTip === tip}
            onClick={() => onTipChange(tip)}
          />
        ))}

        <input
          id='custom-tip'
          type="number"
          min='0'
          max='500'
          placeholder="Custom"
          value={selectedTip === 0 ? '' : selectedTip}
          onChange={(e) => onTipChange(e.target.value)}
          onKeyDown={onKeyDown}
          className='bg-neutral-200' />
      </div>
    </div>
  );
};

export default TipSelector