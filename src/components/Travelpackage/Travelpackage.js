import React,{useState} from 'react';
import './travelpackage.css';
import tp1 from '../../assets/tp1.jpg'
import tp2 from '../../assets/tp2.jpg'
import tp3 from '../../assets/tp3.jpg'
import tp4 from '../../assets/tp4.jpg'
import tp5 from '../../assets/tp5.jpg'
import tp6 from '../../assets/tp6.jpg'
import tp7 from '../../assets/tp7.jpg'
import tp8 from '../../assets/tp8.jpg'


const Travelpackage = () => {

    const data = [
        {
            id:1,
            image:tp1,
            title:"Maldives",
            price:'900'
        },
        {
            id:2,
            image:tp2,
            title:"Bali",
            price:'900'
        },
        {
            id:3,
            image:tp3,
            title:"Dubai",
            price:'900'
        },
        {
            id:4,
            image:tp4,
            title:"Istanbul",
            price:'900'
        },
        {
            id:5,
            image:tp5,
            title:"Paris",
            price:'900'
        },
        {
            id:6,
            image:tp6,
            title:"Kedarnath",
            price:'900'
        },
        {
            id:7,
            image:tp7,
            title:"Rome",
            price:'900'
        },
        {
            id:8,
            image:tp8,
            title:"Mysore",
            price:'900'
        },
    ]

    const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
        <div className="templateContainer">
        <div className="searchInput_Container">
          <input className="searchInput" type="text" placeholder="Explore with US" onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <img src={val.image} alt="" />
                      <h3 className='desc'>{val.title}</h3>
                      <p className="price">Rs. {val.price}</p>
                  </div> 
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default Travelpackage