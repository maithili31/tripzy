import React,{useEffect} from 'react';
import './home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[]);

  return (
   <section className='home'>
      <div className='secContainer container'>
        <div className='homeText'>

          <h1 data-aos="fade-up" className='title'>
            Plan your trip with us 
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className='subTitle'>
            Explore your favorite city with a green heart and leave nothing but footprints behind.
          </p>

          <button data-aos="fade-up" data-aos-duration="3000" className='btns'>
            <a href='#'>Let's Get Lost</a>
          </button>
        </div>

        <div className='homeCard grid'>

          <div data-aos="fade-right" data-aos-duration="2000" className='locationDiv'>
            <label htmlFor='location'>Location</label>
            <input type='text' placeholder='Port of Call' />
          </div>

          <div data-aos="fade-right" data-aos-duration="2500" className='distDiv'>
            <label htmlFor='distance'>Theme</label>
            <input type='text' placeholder='Miles Marker' />
          </div>

          <div data-aos="fade-right" data-aos-duration="3000" className='priceDiv'>
            <label htmlFor='price'>Budget</label>
            <input type='text' placeholder='Budget Gauge' />
          </div>

          <button data-aos="fade-left" data-aos-duration="2000" className='btns'>Search</button>

        </div>

      </div>
   </section>
  )
}

export default Home