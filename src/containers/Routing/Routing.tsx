import { Route, Routes } from 'react-router-dom'
import UnderConstruction from '../UnderConstruction/UnderConstruction'

function Routing() {
  return (
    <Routes>
        <Route path="/" element={<UnderConstruction/>}></Route>
    </Routes>
  )
}

export default Routing