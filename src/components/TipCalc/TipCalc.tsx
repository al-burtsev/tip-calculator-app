import { useCallback, useState, useMemo, useRef, useEffect } from 'react'
import TipCalcField from './components/TipCalcField/TipCalcField'
import TipSelector from './components/TipSelector/TipSelector'
import TipReset from './components/TipReset/TipReset'
import IconDollar  from '../ui/Icons/IconDollar'
import { calcTips, calcPersonTotalSum } from '@utils'

const TipCalc = () => {
  const [bill, setBill] = useState<string>('')
  const [tipPercent, setTipPercent] = useState<string>('');
  const [people, setPeople] = useState<string>('')

  const resultsRef = useRef<HTMLDivElement>(null)

  const billNum = Number(bill)
  const tipNum = Number(tipPercent)
  const peopleNum = Number(people)

  const tipAmount = useMemo(() => calcTips(billNum, tipNum, peopleNum), [billNum, tipNum, peopleNum])
  const totalPerPerson = useMemo(() => calcPersonTotalSum(billNum, tipNum, peopleNum), [billNum, tipNum, peopleNum])

  const hasData = (billNum > 0 || peopleNum > 0 || tipNum > 0)
  const isPeopleZero = people !== '' && peopleNum === 0

  const displayTip = hasData ? tipAmount : '0.00'
  const displayTotal = hasData ? totalPerPerson : '0.00'

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

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (['-', '+', 'e', 'E'].includes(e.key)) {
      e.preventDefault();
      return
    }

    if (e.key === 'Enter') {
      const canScroll = billNum > 0 && tipNum > 0 && peopleNum > 0

      if (canScroll) {
        setTimeout(() => {
          resultsRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          });
        }, 350)
      }
    }
  }, [billNum, tipNum, peopleNum])


  const handleReset = useCallback(() => {
    setBill('')
    setTipPercent('')
    setPeople('')
  }, [])

  return (
    <section>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='container font-main bg-white py-8 rounded-t-3xl grid gap-8 md:grid-cols-2 md:rounded-3xl
       selection:bg-primary selection:text-neutral-50'>
        <div className='grid gap-8 px-2 md:px-4 md:py-3 md:gap-10'>
          <TipCalcField
            id='bill'
            label="Bill"
            icon="/icon-dollar.svg"
            inputVal={bill}
            onKeyDown={handleKeyDown}
            onChange={handleBillChange}
          />
          <TipSelector
            selectedTip={tipPercent}
            onKeyDown={handleKeyDown}
            onTipChange={handleTipChange}
          />
          <TipCalcField
            id='number-of-people'
            label="Number of people"
            icon="/icon-person.svg"
            inputVal={people}
            isError={isPeopleZero}
            error={isPeopleZero ? "Can't be zero" : ""}
            onKeyDown={handleKeyDown}
            onChange={handlePeopleChange}
          />

        </div>
        <div
          ref={resultsRef}
          className='bg-neutral-900 px-6 pt-10 pb-6.5 rounded-xl overflow-x-hidden grid gap-7 md:px-10 md:py-9 md:gap-0'>
          <div className='flex justify-between items-center flex-wrap overflow-hidden md:items-start md:translate-y-4'>
            <div className='text-white font-bold'>
              Tip Amount
              <div className='text-neutral-400 text-xs'> / person</div>
            </div>
            <div
              data-testid="tip-amount"
              className='leading-none text-3xl md:text-5xl text-primary font-bold flex items-center gap-x-0.5 overflow-x-auto overflow-y-clip'>
              <IconDollar className="text-primary w-4 h-6 md:w-6 md:h-8" />
              {displayTip}</div>
          </div>
          <div className='flex justify-between items-center flex-wrap overflow-hidden md:items-start'>
            <div className='text-white font-bold'>
              Total
              <div className='text-neutral-400 text-xs'>/ person</div>
            </div>
            <div
              data-testid="total-amount"
              className='leading-none text-3xl md:text-5xl text-primary font-bold flex items-center gap-x-0.5 overflow-x-auto overflow-y-clip'>
              <IconDollar className="text-primary w-4 h-6 md:w-6 md:h-8" />
              {displayTotal}</div>
          </div>
          <TipReset
            isActive={hasData}
            onClick={handleReset}
          />
          <button type="submit" className='hidden' aria-hidden="true"></button>
        </div>
      </form>
    </section>
  )
}

export default TipCalc