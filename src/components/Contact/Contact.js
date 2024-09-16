import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import contactimg from '../../assets/contactimg.jpg'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m0lmvkn', 'template_y2vcihf', form.current, {
        publicKey: 'zNj28fCauSWs8wKIH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='mainbody'>
        <div className='emailcontainer'>
        <h1>Contact Us</h1>
        <form className='formstart' ref={form} onSubmit={sendEmail}>
        
            <div className='contactimg'>
            
            </div>
            <div className='formgroup'>
                {/* <label>Name</label> */}
                <input type="text" name="from_name" placeholder='Enter Name' />
            </div>
            
            <div className='formgroup'>
                {/* <label>Email</label> */}
                <input type="email" name="from_email" placeholder='Enter email address' />
            </div>

            <div className='formgroup'>
                {/* <label>Message</label> */}
                <textarea name="message" rows={5} placeholder='Enter Your Message' />
            </div>
            <div  className='sendbtn'>
                <input id='sendbtn' type="submit" value="Send" />
            </div>
        </form>
        </div>
    </div>
  );
};