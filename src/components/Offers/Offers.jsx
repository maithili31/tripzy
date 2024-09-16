import React,{useEffect} from 'react';
import './offers.css';
import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { MdAirportShuttle } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from 'react-icons/bs';
import kashmirstay from '../../assets/hotelkashmir.jpg';
import keralastay from '../../assets/keralastay.jpg';
import kolkatastay from '../../assets/kolkatastay.jpg';
import udaipurstay from '../../assets/udaipurstay.jpg';
import mumbaistay from '../../assets/mumbaistay.jpg';
import maldivestay from '../../assets/maldivestay.jpg';
import turkeystay from '../../assets/turkeystay.jpg';
import santorinistay from '../../assets/santorinistay.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';


const offer = [
  {
    id:1,
    imgSrc:kashmirstay,
    destTitle:"Eden Abode",
    location:'Kashmir',
    price:'Rs. 1700',
  },
  {
    id:2,
    imgSrc:keralastay,
    destTitle:"Malgudi",
    location:'Kerala',
    price:'Rs. 1000',
  },
  {
    id:3,
    imgSrc:kolkatastay,
    destTitle:"ITC Royal Bengal",
    location:'Kolkata',
    price:'Rs. 8000',
  },
  {
    id:4,
    imgSrc:udaipurstay,
    destTitle:"Shiv Niwas Palace",
    location:'Udaipur',
    price:'Rs. 4000',
  },
  {
    id:5,
    imgSrc:mumbaistay,
    destTitle:"Taj Mahal",
    location:'Mumbai',
    price:'Rs. 5500',
  },
  {
    id:6,
    imgSrc:maldivestay,
    destTitle:"Aqua Haven",
    location:'Maldive',
    price:'Rs. 2800',
  },
  {
    id:7,
    imgSrc:turkeystay,
    destTitle:"Villa Thrilla",
    location:'Turkey',
    price:'Rs. 2480',
  },
  {
    id:8,
    imgSrc:santorinistay,
    destTitle:"Serenity",
    location:'Santorini, Greece',
    price:'Rs. 3600',
  },
]

const Offers = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[]);

  return (
    <section className='offer container section'>
        <div className='secContainer'>

          <div data-aos="fade-up" data-aos-duration="2000" className='secIntro'>
            <h2 className='secTitle'>
              Deal Delights
            </h2>
            <p>
              Pack your laughter and your suitcase! Our deals are a riot!
            </p>
          </div>

          <div className='mainContent grid'>

              {
                offer.map(({id,imgSrc,stTdeitle,location,price}) => {
                  return (
                    <div data-aos="fade-up" data-aos-duration="3000" className='singleOffer'>

                      <div className='destImage'>
                        <img src={imgSrc} alt={stTdeitle} />
                        <span className='discount'>
                          30% Off
                        </span>
                      </div>

                      <div className='offerBody'>

                        <div className='price flex'>
                          <h4>{price}</h4>
                          <span className='status'>
                            For Rent
                          </span>
                        </div>

                        <div className='amenities flex'>
                          <div className='singleAmenity flex'>
                          <MdKingBed  className='icon'/>
                          <small>2 Beds</small>
                          </div>
                          <div className='singleAmenity flex'>
                          <MdBathtub  className='icon'/>
                          <small>1 Bath</small>
                          </div>
                          <div className='singleAmenity flex'>
                          <FaWifi  className='icon'/>
                          <small>Wi-Fi</small>
                          </div>
                          <div className='singleAmenity flex'>
                          <MdAirportShuttle  className='icon'/>
                          <small>Shuttle</small>
                          </div>
                        </div>

                        <div className='location flex'>
                            <MdLocationOn className='icon' />
                            <small>Dal Lake , {location}</small>
                        </div>
                        <button className='btns flex'>
                          View Details
                          
                          <BsArrowRightShort className='icon'/> 
                        </button>

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

export default Offers