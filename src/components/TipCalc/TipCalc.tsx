import { useState } from 'react'
import Field from './components/TipCalcField/TipCalcField'
import TipSelector from './components/TipSelector/TipSelector'

const Calculator = () => {
  const [billAmount, setBillAmount] = useState<number>(0)
  const [tipPercentage, setTipPercentage] = useState<number>(0);
  const [numberOfPeople, setNumberOfPeople] = useState<number>(0)

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillAmount(Number(e.target.value))
  }

  const handleNumberOfPeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfPeople(Number(e.target.value))
  }

  const handleTipChange = (value: number | string) => {
    setTipPercentage(Number(value));
  };

  return (
    <section>
      <form className='font-main p-6'>
        <Field
          id='bill'
          label="Bill"
          inputVal={billAmount}
          onChange={handleBillChange}
        />
        <TipSelector
          selectedTip={tipPercentage}
          onTipChange={handleTipChange}
        />
        <Field
          id='number-of-people'
          label="Number of people"
          inputVal={numberOfPeople}
          onChange={handleNumberOfPeopleChange}
        />

        <div className='bg-neutral-900 p-4 rounded-xl grid gap-8'>
          <div>Tip Amount / person <span>0.00</span></div>
          <div>Total / person <span>0.00</span></div>
          <button
            type='button'
            className='bg-primary rounded-sm uppercase text-neutral-900 text-2xl font-bold w-full px-2 py-2 cursor-pointer'
          >
            reset
          </button>
        </div>
      </form>
    </section>
  )
}

export default Calculator