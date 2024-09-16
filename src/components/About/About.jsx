import React,{useEffect} from 'react';
import './about.css';
import hiking1 from '../../assets/hiking1.jpg'
import hiking2 from '../../assets/hiking2.jpg'
import hiking3 from '../../assets/hiking3.jpg'
import video from '../../assets/video.mp4'
import Aos from 'aos';
import 'aos/dist/aos.css';



const About = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[]);

  return (
    <section className='about section'>
      <div className='secContainer'>
        <h2 className='title'>
          Why Hike ?
        </h2>
        <div className='mainContent container grid'>

            <div data-aos="fade-up" data-aos-duration="2000" className='singleItem'>

              <img src={hiking1} alt='Image name'/>
              <h3>100+ Mountains</h3>
              <p>
                  Of all the paths you take in life, make sure a few of them are dirt.
              </p>

            </div>

            <div data-aos="fade-up" data-aos-duration="2500" className='singleItem'>

              <img src={hiking3} alt='Image name'/>
              <h3>1000+ Hikings</h3>
              <p>
                  Of all the paths you take in life, make sure a few of them are dirt.
              </p>

            </div>

            <div data-aos="fade-up" data-aos-duration="3000" className='singleItem'>

              <img src={hiking2} alt='Image name'/>
              <h3>2000+ Hikers</h3>
              <p>
                  Of all the paths you take in life, make sure a few of them are dirt.
              </p>

            </div>

        </div>

        <div className='videoCard container'>
          <div className='cardContent grid'>
              <div data-aos="fade-right" data-aos-duration="2000" className='cardText'>
                <h2>Step into the House of Wows</h2>
                <p>
                  Embrace the chaos, seek the unknown, and let the adventure begin!
                </p>
              </div>

              <div data-aos="fade-left" data-aos-duration="2000" className='cardVideo'>
                <video src={video} autoPlay loop muted type='video/mp4' />
              </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About