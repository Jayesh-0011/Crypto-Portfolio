import { useState } from 'react'
import Heading from './components/Heading'
import Box from './components/Content/Box'
import Transaction from './components/Transactions/Transaction'
import { HistContext } from './hooks/HistContext'
import { CntContext } from './hooks/CntContext'
import { ReturnContext } from './hooks/ReturnContext'
import Chart from './components/Chart/Chart'
import './App.css'

function App() {
  const [hist, setHist] = useState([]);
  const [cnt, setCnt] = useState([]);
  const [returns, setReturns] = useState(0)

  return (
    <>
      <HistContext.Provider value={{ hist, setHist }}>
        <CntContext.Provider value={{ cnt, setCnt }}>
        <ReturnContext.Provider value={{ returns, setReturns }}>
          
          <Heading />
          <div className="flex">
            <Box />
            <Chart />
          </div>

          <Transaction />
        </ReturnContext.Provider>
        </CntContext.Provider>
      </HistContext.Provider>

    </>
  )
}

export default App
