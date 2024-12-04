import { useState } from 'react'; 
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 

import './App.css';
import Articles from './components/Articles';

function App() {

  return (
    <>
      <Navbar />
      <Articles />
      <Footer />
    </>
  )
}

export default App
