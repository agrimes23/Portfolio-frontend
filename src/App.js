import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import WebProjects from './components/Projects/WebProjects'
import MobileProjects from './components/Projects/MobileProjects';


const App = () => {
  return (
    <>
    <AnimatePresence>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/webprojects" element={<WebProjects />}></Route>
        <Route path="/mobileprojects" element={<MobileProjects />}></Route>
        <Route path="/experience" element={<Experience/>}></Route>
      </Routes>
      </AnimatePresence>
      
    </>
  )
}

export default App;
