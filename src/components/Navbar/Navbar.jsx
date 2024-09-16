import React,{useState} from 'react';
import './navbar.css';
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {

  const [active,setActive] = useState('navBar')
  const showNav = () =>{
    setActive('navBar activeNavBar')
  }

  const removeNav = () =>{
    setActive('navBar ')
  }

  const [transparent,setTransparent] = useState('header');
  const addBg= () => {
    if(window.scrollY >= 10){
      setTransparent('header activeHeader')
    } else {
      setTransparent('header');
    }
  }
  window.addEventListener('scroll',addBg)

  return (
    <section className='navBarSection'>
      <div className={transparent}>
        <div className='logoDiv'>
          <a className='logo' href='/'>
            <h1 className='flex'><MdTravelExplore className='icon'/>Tripzy</h1>
          </a>
        </div>

        <div className={active}>

          <ul className='navLists flex'>
            <li className='navItem'>
              <a href='/' className='navLink'>Home</a>
            </li>
          
            <li className='navItem'>
              <a href='/travelpackages' className='navLink'>Travel Packages</a>
            </li>
          
            <li className='navItem'>
              <a href='/budget' className='navLink'>Budget Tracker</a>
            </li>

            <li className='navItem'>
              <a href='/notes' className='navLink'>Travel Memo</a>
            </li>
          
            <li className='navItem'>
              <a href='/contact' className='navLink'>Contact</a>
            </li>
        
            <li className='navItem'>
              <a href='#' className='navLink'>Blog</a>
            </li>

            <div className='headerBtns flex'>
              <button className='btns loginBtns'> 
                <a href='/login'>Login</a>
              </button>
              <button className='btns'>
                <a href='/register'>sign up</a>
              </button>
            </div>

            </ul>

            <div onClick={removeNav} className='closeNavBar'>
              <AiFillCloseCircle className='icon' />
            </div>

        </div>

        <div onClick={showNav} className='toggleNavBar'>
          <TbGridDots className='icon' />
        </div>

      </div>
    </section>
  )
}

export default Navbar