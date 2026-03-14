import './App.css'
import NavBar from './components/NavBar'
import Watchlist from './features/watchlist/Watchlist'
import Home from './features/home/Home'
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
