import { useCallback, useState, useMemo } from 'react'
import TipCalcField from './components/TipCalcField/TipCalcField'
import TipSelector from './components/TipSelector/TipSelector'
import TipReset from './components/TipReset/TipReset'
import { calcTips, calcPersonTotalSum } from '@utils'

const TipCalc = () => {
  const [bill, setBill] = useState<string>('')
  const [tipPercent, setTipPercent] = useState<string>('');
  const [people, setPeople] = useState<string>('')

  const handleBillChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (Number(value) < 0) {
      return
    }

    setBill(value)
  }, [])

  const handlePeopleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (Number(value) < 0) {
      return
    }

    setPeople(value);
  }, [])

  const handleTipChange = useCallback((value: number | string) => {
    if (Number(value) < 0) {
      return
    }

    if (typeof value === 'number') {
      setTipPercent(String(value));
      return;
    }

    setTipPercent(value);

  }, [])

  const preventInvalidChars = useCallback((e: React.KeyboardEvent) => {
    if (['-', '+', 'e', 'E'].includes(e.key)) {
      e.preventDefault();
    }
  }, [])

  const handleReset = useCallback(() => {
    setBill('')
    setTipPercent('')
    setPeople('')
  }, [])

  const billNum = Number(bill)
  const tipNum = Number(tipPercent)
  const peopleNum = Number(people)

  const tipAmount = useMemo(() => calcTips(billNum, tipNum, peopleNum), [billNum, tipPercent, peopleNum])
  const totalPerPerson = useMemo(() => calcPersonTotalSum(billNum, tipNum, peopleNum), [billNum, tipPercent, peopleNum])

  const hasData = (billNum > 0 && peopleNum > 0)
  const isPeopleZero = people !== '' && Number(people) === 0

  const displayTip = hasData ? tipAmount : '0.00'
  const displayTotal = hasData ? totalPerPerson : '0.00'

  return (
    <section>
      <form className='container font-main bg-white py-8 rounded-t-3xl grid gap-8 selection:bg-primary selection:text-neutral-50'>
        <div className='grid gap-8 px-2'>
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
            error={isPeopleZero ? "Can't be zero" : ""}
            onKeyDown={preventInvalidChars}
            onChange={handlePeopleChange}
          />

        </div>
        <div className='bg-neutral-900 px-6 pt-10 pb-6.5 rounded-xl grid gap-7'>
          <div className='flex justify-between items-center'>
            <div className='text-white font-bold'>
              Tip Amount
              <div className='text-neutral-400 text-xs'> / person</div>
            </div>
            <div className='leading-none text-3xl text-primary font-bold'>{displayTip}</div>
          </div>
          <div className='flex justify-between items-center'>
            <div className='text-white font-bold'>
              Total
              <div className='text-neutral-400 text-xs'>/ person</div>
            </div>
            <div className='leading-none text-3xl text-primary font-bold'>{displayTotal}</div>
          </div>
          <TipReset
            isActive={hasData}
            onClick={handleReset}
          />
        </div>
      </form>
    </section>
  )
}

export default TipCalc