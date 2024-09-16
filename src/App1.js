import React from 'react';
import './app1.css';
import Home from './components/Home/Home';
import Popular from './components/Popular/Popular';
import Offers from './components/Offers/Offers';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import { Contact } from './components/Contact/Contact';
import Bookhome from './components/Booking/Bookhome';


const App1 = () => {
  return (
    <>
        {/* <Home />
        <Popular />
        <Offers />
        <About />
        <Blog /> */}
        <Bookhome />
    </>
  )
}

export default App1