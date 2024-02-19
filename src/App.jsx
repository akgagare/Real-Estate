import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignUp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <h1 className='text-red-500'>Hello friends</h1>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
        <Route path='/sign-up' element={<SignOut/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
