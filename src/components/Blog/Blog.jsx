import React,{useEffect} from 'react';
import './blog.css';
import { BsArrowRightShort } from 'react-icons/bs';
import blog1 from '../../assets/blog1.jpg';
import blog2 from '../../assets/blog2.jpg';
import blog3 from '../../assets/blog3.jpg';
import blog4 from '../../assets/blog4.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Posts = [
  {
    id:1,
    postImage: blog1,
    title:'Little Mermaid Statue',
    desc:"The Little Mermaid statue is a bronze sculpture located in Copenhagen, Denmark.In Andersen's story, the Little Mermaid sacrifices her voice and endures great pain in her quest for love and humanity. The statue captures her longing and melancholy as she gazes out over the harbor, reflecting themes of sacrifice, longing, and unfulfilled dreams."
  },
  {
    id:2,
    postImage: blog2,
    title:'El Jem, Mahdia ,Tunisia',
    desc:"El Jem is a town located in the Mahdia Governorate of Tunisia. It is most famous for its well-preserved Roman amphitheater, which is one of the largest and best-preserved Roman amphitheaters in the world. This ancient site is a UNESCO World Heritage Site."
  },
  {
    id:3,
    postImage: blog3,
    title:'DisneyLand',
    desc:"Disneyland is a world-renowned theme park resort located in Anaheim, California.It was the first Disney theme park and was opened by Walt Disney himself on July 17, 1955. Disneyland is known for its iconic Sleeping Beauty Castle, immersive themed lands such as Fantasyland, Adventureland, Tomorrowland, and Main Street, U.S.A., as well as its thrilling rides, live entertainment, and beloved Disney characters. "
  },
  {
    id:4,
    postImage: blog4,
    title:'Ayutthaya Historical Park , Thailand',
    desc:"Ayutthaya Historical Park is a UNESCO World Heritage Site located in the city of Ayutthaya, Thailand. It was the second capital of the Siamese Kingdom, founded in 1350, and it flourished from the 14th to the 18th centuries, during which it grew to be one of the world's largest urban areas and a center of global diplomacy and commerce."
  },
]


const Blog = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[]);

  return (
    <section className='blog container section'>
      <div className='secContainer'>

        <div className='secIntro'>
          <h2 data-aos="fade-up" data-aos-duration="2000" className='secTitle'>
            Our BlogS
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            An insight to the incredible experience in the world.
          </p>
        </div>

        <div className='mainContainer grid'>
          {
            Posts.map(({id,postImage,title,desc}) => {
              return (
                <div data-aos="fade-up" data-aos-duration="2000" className='singlePost grid'>
                  <div className='imgDiv'>
                    <img src={postImage} alt={title}/>
                  </div>

                  <div className='postDetails'>
                    <h3 data-aos="fade-up" data-aos-duration="3000">{title}</h3>
                    <p data-aos="fade-up" data-aos-duration="4000">
                      {desc}
                    </p>
                  </div>

                  <a href='#' className='flex' data-aos="fade-right" data-aos-duration="4500">
                    
                    Read More
                    <BsArrowRightShort className='icon' /> 
                    
                  </a>
               </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Blog