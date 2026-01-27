import { useState } from 'react'
import TipCalcField from './components/TipCalcField/TipCalcField'
import TipSelector from './components/TipSelector/TipSelector'
import { calcTips, calcPersonTotalSum } from '@utils'

const TipCalc = () => {
  const [bill, setBill] = useState<string>('')
  const [tipPercent, setTipPercent] = useState<number>(0);
  const [people, setPeople] = useState<string>('')
  
  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (Number(value) < 0) {
      return
    }

    setBill(value)
  }

  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (Number(value) < 0) {
      return
    }

    setPeople(value);
  }

  const handleTipChange = (value: number | string) => {
    if (Number(value) < 0) {
      return
    }

    setTipPercent(Number(value))
  }

  const preventInvalidChars = (e: React.KeyboardEvent) => {
    if (['-', '+', 'e', 'E'].includes(e.key)) {
      e.preventDefault();
    }
  };

  const handleReset = () => {
    setBill('')
    setTipPercent(0)
    setPeople('')
  };

  const billNum = Number(bill)
  const peopleNum = Number(people)

  const tipAmount = calcTips(billNum, tipPercent, peopleNum)
  const totalPerPerson = calcPersonTotalSum(billNum, tipPercent, peopleNum)

  const hasData = (billNum > 0 && peopleNum > 0)

  const displayTip = hasData ? tipAmount : '0.00'
  const displayTotal = hasData ? totalPerPerson : '0.00'

  return (
    <section>
      <form className='font-main p-6'>
        <TipCalcField
          id='bill'
          label="Bill"
          inputVal={bill}
          onKeyDown={preventInvalidChars}
          onChange={handleBillChange}
        />
        <TipSelector
          selectedTip={tipPercent}
          onKeyDown={preventInvalidChars}
          onTipChange={handleTipChange}
        />
        <TipCalcField
          id='number-of-people'
          label="Number of people"
          inputVal={people}
          onKeyDown={preventInvalidChars}
          onChange={handlePeopleChange}
        />

        <div className='bg-neutral-900 p-4 rounded-xl grid gap-8'>
          <div>Tip Amount / person <span>{ displayTip }</span></div>
          <div>Total / person <span>{ displayTotal }</span></div>
          <button
            type='button'
            onClick={handleReset}
            className='bg-primary rounded-sm uppercase text-neutral-900 text-2xl font-bold w-full px-2 py-2 cursor-pointer'
          >
            reset
          </button>
        </div>
      </form>
    </section>
  )
}

export default TipCalc