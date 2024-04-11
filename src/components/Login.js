import React, { useContext, useState } from 'react'
import { UserContext } from '../App'
import { useNavigate } from 'react-router-dom';
import { login } from '../service/api';

const Login = () => {
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    try{
      e.preventDefault();

      const payload = {
        email: email,
        password: password
      }

      const res = await login(payload);
      if(res.status === 400 || !res) {
        window.alert("Invalid Credentials");
      } else {
        dispatch({ type: "USER", payload: true });
        window.alert("Login Successfully");
        const token = res.data.userInfo.token;
        localStorage.setItem('token', JSON.stringify(token))
        navigate('/');
        setEmail('');
        setPassword('')
      }

    }catch(err) {
      console.log(err)
    }
  }


  return (
    <div style={{ height: '100vh' }} className='d-flex align-items-center justify-content-center'>
      <div className='registration shadow m-5 p-3 card col-sm-6 col-md-4'>
        <div className="card-title">
          <h1 style={{ textAlign: 'center' }}>Login</h1>
        </div>
        <div className="card-body">
          <form method='POST' className='form'>
            <input type="email" name='email' className='mb-3 form-control' placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
             />
            <input 
              name='password'
              type='password'
              className='form-control'
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />
            <input 
              type='submit'
              name='signup'
              id='signup'
              className='btn btn-dark mt-4 form-submit'
              value="Login"
              onClick={loginUser}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login