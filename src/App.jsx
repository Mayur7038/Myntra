import './App.css'
import { Navbar } from './Component/Navbar/Navbar'
import {Footer} from "./Component/Footer/Footer"
import {Router} from "./Component/Router"


function App() {

  return (
    <div className="App">

      <Navbar/>
      <Router/>
      <Footer/>
     
    </div>
  )
}

export default App
