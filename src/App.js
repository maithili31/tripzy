import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import App1 from './App1';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import './app.css';
import Budget from './components/Budget/Budget';
import Travelpackage from './components/Travelpackage/Travelpackage';
import { Contact } from './components/Contact/Contact';
import Bookhome from './components/Booking/Bookhome';
import Hotel from './components/Booking/Hotel';
import List from './components/Booking/List';
import NoteHome from './components/Notes/NoteHome/NoteHome';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<App1 />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/budget' element={<Budget />} />
          <Route path='/travelpackages' element={<Travelpackage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/bookhome' element={<Bookhome />} />
          <Route path='/hotels' element={<List />} />
          <Route path='/hotels/:id' element={<Hotel />} />
          <Route path='/notes' element={<NoteHome />} />
        </Routes>
        <Footer />
      </Router>
        
        
    </>
  )
}

export default App