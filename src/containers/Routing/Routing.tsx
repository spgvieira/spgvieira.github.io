import { Route, Routes } from 'react-router-dom'
import UnderConstruction from '../UnderConstruction/UnderConstruction'
import Header from '../Header/Header'

function Routing() {
  return (
      <div>
        <Header></Header>
        <Routes> 
          <Route path="/" element={<UnderConstruction/>}></Route>
        </Routes>
      </div>
  )
}

export default Routing