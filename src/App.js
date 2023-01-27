import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience/Experience';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Projects from './components/Projects'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/experience" element={<Experience/>}></Route>
      </Routes>
    </>
  )
}

export default App;
