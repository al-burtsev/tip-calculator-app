interface TipCalcFieldProps {
  id: string;
  label: string;
  inputVal: string;
  onKeyDown: (event: React.KeyboardEvent) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TipCalcField = (props: TipCalcFieldProps) => {
  const { id, label, inputVal, onChange, onKeyDown } = props
  return (
    <div className='text-black font-main grid'>
      <label htmlFor={id}
        className=''
      >
        {label}
      </label>
      <input
        id={id}
        type="number"
        min='0'
        placeholder='0'
        value={inputVal}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className='bg-neutral-200 text-neutral-900 text-2xl font-bold' />
    </div>
  )
}

export default TipCalcField