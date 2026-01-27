import predefinedTips from '../../../../constants/tips'
import TipButton from '../TipButton/TipButton';


interface TipSelectorProps {
  selectedTip: number;
  onTipChange: (value: number | string) => void;
}

const TipSelector = ({ selectedTip, onTipChange }: TipSelectorProps) => {
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
          placeholder="Custom"
          onChange={(e) => onTipChange(e.target.value)}
          className='bg-neutral-200' />
      </div>
    </div>
  );
};

export default TipSelector