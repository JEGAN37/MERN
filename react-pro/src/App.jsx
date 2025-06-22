import React from 'react'
import Contact from './pages/contact'
import Home from './pages/home'
import Skills from './pages/skills'
import Form from './pages/form'
import Navbar from './components/Navbar'
import Counter from './components/Counter'
import State from  './Hooks/State'
import Hooks from './pages/Hooks'
import Effect from './Hooks/Effect'
import Ref from './Hooks/Ref'
import Login from './pages/Login'
import Reducer from './Hooks/Reducer'
import {Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/about" element={<About />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="/form" element={<Form />} />
        <Route  path="/skills" element={<Skills />} />
        <Route  path="/hooks" element={<Hooks/>} />
        <Route  path="/state" element={<State/>} />
        <Route  path='/effect' element={<Effect/>} />
        <Route path='/ref' element={<Ref/>}/>
        <Route path='/reducer' element={<Reducer/>}/>

      </Routes> 
      

    </div>
  )
}

export default App
