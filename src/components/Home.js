import React, { useEffect, useState } from 'react'
import { getData } from '../service/api';

const Home = () => {
  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    loadInitial()
  }, [])

  const loadInitial = async () => {
    try{
      let token = JSON.parse(localStorage.getItem('token'));
      const res = await getData(token);
      setUserName(res.data.name);
      setShow(true);
    }catch(err) {
      console.log(err);
    }
  }

  return (
    <div style={{height: '80vh', width: '100vw'}} className='d-flex align-items-center justify-content-center'>
      <div>
        <p style={{textAlign: 'center'}}>WELCOME</p>
        <h1 style={{textAlign: 'center'}}>{userName}</h1>
        <h1>{show ? 'Happy, to see you back' : 'We Are The MERN Developer'}</h1>
      </div>
    </div>
  )
}

export default Home