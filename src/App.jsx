import './App.css'
import { Navbar } from './Component/Navbar/Navbar'
import {Footer} from "./Component/Footer/Footer"
import { Landing } from './Component/Landing/Landing'

function App() {

  return (
    <div className="App">

      <Navbar/>
      <Landing/>
      <Footer/>
     
    </div>
  )
}

export default App
