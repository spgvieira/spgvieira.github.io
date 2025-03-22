import { Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import Footer from '../Footer/Footer'

function Routing() {
  return (
      <div>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
        </style>
        <Header></Header>
        <Routes> 
          <Route path="/" element={<Landing/>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
  )
}

export default Routing