import React, { useContext } from 'react'
import { UserContext } from '../App'
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import { logoutapi } from '../service/api';

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

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


  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <p onClick={logout} style={{cursor: 'pointer'}}>Logout</p>
          </li>
        </>
      )
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">Registration</NavLink>
          </li>
        </>
      )
    }
  }

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className="container-fluid">
          <img height={40} src={logo} alt="logo" />
          <button className='navbar-toggler' type='button'
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav' style={{ marginLeft: 'auto' }}>
              <RenderMenu />
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar