import { useState } from 'react'
import Heading from './components/Heading'
import Box from './components/Content/Box'
import Transaction from './components/Transactions/Transaction'
import { HistContext } from './hooks/HistContext'
import { CntContext } from './hooks/CntContext'
import Chart from './components/Chart/Chart'
import './App.css'

function App() {
  const [hist, setHist] = useState([]);
  const [cnt, setCnt] = useState([]);
  return (
    <>
      <HistContext.Provider value={{ hist, setHist }}>
        <CntContext.Provider value={{ cnt, setCnt }}>
          
          <Heading />
          <div className="flex">
            <Box />
            <Chart />
          </div>

          <Transaction />
        </CntContext.Provider>
      </HistContext.Provider>

    </>
  )
}

export default App
