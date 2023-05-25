
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Transfer from './pages/Transfer'
import ForOpay from './pages/ForOpay'
import OtherBanks from './pages/OtherBanks'



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Transfer/>}/>
          <Route path='/transfer' element={<Transfer/>}/>
          <Route path='/opay' element={<ForOpay/>}/>
          <Route path='/otherbanks' element={<OtherBanks/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
