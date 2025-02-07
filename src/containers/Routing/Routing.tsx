import { Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import Footer from '../Footer/Footer'

function Routing() {
  return (
      <div>
        <Header></Header>
        <Routes> 
          <Route path="/" element={<Landing/>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
  )
}

export default Routing