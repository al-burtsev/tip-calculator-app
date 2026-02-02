import TipCalc from './components/TipCalc/TipCalc'
import Header from './components/sections/Header/Header'

function App() {

  return (
    <>
      <Header />
      <main>
        <h1 className='sr-only'>Splitter — tip calculator</h1>
        <TipCalc />
      </main>
    </>
  )
}

export default App
