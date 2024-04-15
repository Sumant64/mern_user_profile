import React, { useState } from 'react'
import { postContact } from '../service/api';

const Contact = () => {
  const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });

  const contactForm = async (e) => {
    try{
      e.preventDefault();
      let token = JSON.parse(localStorage.getItem('token'))
      const { name, email, phone, message } = userData;
  
      const payload = {
        name,
        email,
        phone,
        message
      }
  
      const res = await postContact(token, payload);
      alert('User contact added successfully')
      
    } catch (err) {
      console.log(err)
    }

  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({...userData, [name]: value})
  }

  return (
    <>
      <div className="mt-5 p-3 card col-sm-6 col-md-6 offset-md-3 offset-sm-3">
        <div className="card-title">
          <h1 style={{ textAlign: 'center' }}>Get In Touch</h1>
        </div>
        <div className="card-body">
          <form action="#" className='form'>
            <input
              name="name"
              type="text"
              className="form-control mt-1"
              placeholder="Your Name"
              value={userData.name}
              onChange={handleInput}
            />
            <input
              name="email"
              type="email"
              className="form-control mt-3"
              placeholder="Your Email"
              value={userData.email}
              onChange={handleInput}
            />
            <input
              name="phone"
              type="number"
              className="form-control mt-3"
              placeholder="Your Number"
              value={userData.phone}
              onChange={handleInput}
            />
            <textarea
              name="message"
              className="form-control mt-3"
              cols="30"
              rows="5"
              placeholder="Your Message"
              value={userData.message}
              onChange={handleInput}
            ></textarea>
            <button
              className="btn btn-primary mt-3"
              type="submit"
              onClick={contactForm}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact