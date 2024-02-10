import { useState } from 'react';
import './App.css';
import { Home } from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './Navbar';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
 
    <Route path='/Home' element={<Home/>}/>

    </Routes>

    </BrowserRouter>
    
    </>
  )
}

export default App
