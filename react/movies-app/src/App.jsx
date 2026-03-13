import './App.css'
import NavBar from './components/NavBar'
import Watchlist from './components/Watchlist'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/watchlist" element={<Watchlist/>}></Route>
      </Routes>
    </>
  )
}

export default App
