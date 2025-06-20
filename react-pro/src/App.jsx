import React from 'react'
import  About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import Skills from './pages/skills'
import Form from './pages/form'
import Navbar from './components/Navbar'
import Counter from './components/Counter'
import State from  './Hooks/State'
import Hooks from './pages/Hooks'
import Effect from './Hooks/Effect'
import Login from './pages/Login'
import {Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Login/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/about" element={<About />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="/form" element={<Form />} />
        <Route  path="/skills" element={<Skills />} />
        <Route  path="/hooks" element={<Hooks/>} />
        <Route  path="/state" element={<State/>} />
        <Route  path='/effect' element={<Effect/>} />

      </Routes> 
      

    </div>
  )
}

export default App
