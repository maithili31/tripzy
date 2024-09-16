import React,{useEffect} from 'react';
import './popular.css';
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import kashmir from '../../assets/kashmir.jpg';
import srilanka from '../../assets/srilanka.jpg';
import jaipur from '../../assets/jaipur.jpg';
import delhi from '../../assets/delhi.jpg';
import andaman from '../../assets/andaman.jpg';
import kasol from '../../assets/kasol.jpg';
import kerala from '../../assets/kerala.jpg';
import kolkata from '../../assets/kolkata.jpg';
import mumbai from '../../assets/mumbai.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Data= [
  {
    id:1,
    imgSrc:kashmir,
    destTitle:'Paradise on Earth',
    location:'Kashmir',
    grade:'Adventurous and Religious',
  },
  {
    id:2,
    imgSrc:srilanka,
    destTitle:'Discover Serenity',
    location:'Sri Lanka',
    grade:'Cultural',
  },
  {
    id:3,
    imgSrc:jaipur,
    destTitle:'Heritage Beckons',
    location:'Jaipur',
    grade:'Cultural',
  },
  {
    id:4,
    imgSrc:delhi,
    destTitle:'Timeless Majesty',
    location:'Delhi',
    grade:'Historical',
  },
  {
    id:5,
    imgSrc:andaman,
    destTitle:'Island of Dreams',
    location:'Andaman & Nicobar Islands',
    grade:'Peace-Full',
  },
  {
    id:6,
    imgSrc:kasol,
    destTitle:'Mountain Magic',
    location:'Kasol',
    grade:'Trekking',
  },
  {
    id:7,
    imgSrc:kolkata,
    destTitle:'City of Joy',
    location:'Kolkata',
    grade:'Cultural',
  },
  {
    id:8,
    imgSrc:kerala,
    destTitle:"God's Own",
    location:'Kerala',
    grade:'Cultural',
  },
  {
    id:9,
    imgSrc:mumbai,
    destTitle:'City of Dreams',
    location:'Mumbai',
    grade:'Cultural',
  },

]



const Popular = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[]);

  return (
    <section className='popular section container'>
      <div className='secContainer'>

        <div className='secHeader flex'>
            <div data-aos="fade-right" data-aos-duration="2500" className='textDiv'>
              <h2 className='secTitle'>
                 Hot-Spot
              </h2>
              <p>
                From Time Machines to Nature's Big Shows, Come Explore the Bests on Earth!
              </p>
           </div>

            <div data-aos="fade-left" data-aos-duration="2500" className='iconsDiv flex'>
              <BsArrowLeftShort className='icon leftIcon' />
              <BsArrowRightShort className='icon' />
            </div>

        </div>
        
        <div className='mainContent grid'>
            {
              Data.map(({id,imgSrc,destTitle,location,grade})=>{
                return (
                  <div data-aos="fade-up" className='singleDestination'>
                    <div className='destImage'>

                        <img src={imgSrc} alt='Image title' />
                        
                        <div className='overlayInfo'>
                          <h3>{destTitle}</h3>
                          <p> {location} </p>
                          <BsArrowRightShort className='icon' />
                        </div>

                    </div>

                      <div className='destFooter'>
                        <div className='number'>
                          0{id}
                        </div>
                        <div className='destText flex'>
                            <h6>{location}</h6>
                            <span className='flexs'>
                              <span className='dot'>
                                <BsDot className='icon' />
                              </span>
                            </span>
                        </div>
                      </div>

                  </div>
                )
              })
            }
        </div>
        
      </div>
    </section>
  )
}

export default Popular