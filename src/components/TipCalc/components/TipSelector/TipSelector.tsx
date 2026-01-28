import predefinedTips from '../../../../constants/tips'
import TipButton from '../TipButton/TipButton';


interface TipSelectorProps {
  selectedTip: number;
  onKeyDown: (event: React.KeyboardEvent) => void;
  onTipChange: (value: number | string) => void;
}

const TipSelector = ({ selectedTip, onTipChange, onKeyDown }: TipSelectorProps) => {
  return (
    <div className='text-neutral-500 grid'>
      <label htmlFor='custom-tip'
        className='mb-3 font-bold'
      >
        Select Tip %
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-3">
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
          // value={selectedTip === 0 ? '' : selectedTip}
          onChange={(e) => onTipChange(e.target.value)}
          onKeyDown={onKeyDown}
          className='bg-neutral-200 text-neutral-900 text-right font-bold text-2xl rounded-sm pe-4 hocus:outline-primary hocus:outline-2' />
      </div>
    </div>
  );
};

export default TipSelector