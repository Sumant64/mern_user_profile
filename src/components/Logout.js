import React, { useContext, useEffect } from 'react'
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { logoutapi } from '../service/api';

const Logout = () => {

  const {state, dispatch} = useContext(UserContext)

  const navigate = useNavigate();

  useEffect(() => {
    logout()
  }, [])

  const logout = async() => {
    try{
      let token = JSON.parse(localStorage.getItem('token'));
      const res = await logoutapi(token)
      dispatch({type: 'USER', payload: false});
      navigate('/login', {replace: true});
      localStorage.clear()

    }catch (err) {
      console.log(err);

    }
  }

  return (
    <div>Logout</div>
  )
}

export default Logout