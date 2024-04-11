import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../service/api';

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '', email: '', phone: '', work: '', password: '', cpassword: ''
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]: value});
  }

  const postData = async (e) => {
    try{
      e.preventDefault();
      let token = JSON.parse(localStorage.getItem('token'));
      const { name, email, phone, work, password, cpassword } = user;

      const payload = {
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }

      const res = await register(token, payload);
      navigate("/login");
    } catch (err) {
      console.log(err)
    }
  }



  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="shadow registration border m-4 pt-5 p-3 col-sm col-md-6"
          style={{ border: "1px solid red"}}
        >
          <div style={{ textAlign: 'center' }} className='mb-4'>
            <h1>Sign UP</h1>
          </div>
          <div className="row">
            <div className="column col-md-12 col-xs col-sm-12">
              <form className='form' action="" method="POST">
              <input
                  name="name"
                  type="text"
                  className="mb-3 form-control"
                  placeholder="Enter Name"
                  value={user.name}
                  onChange={handleInputs}
                />
                <input
                  name="email"
                  type="email"
                  className="mb-3 form-control"
                  placeholder="Enter Email"
                  value={user.email}
                  onChange={handleInputs}
                />
                <input
                  name="phone"
                  type="number"
                  className="mb-3 form-control"
                  placeholder="Enter Mobile Number"
                  value={user.phone}
                  onChange={handleInputs}
                />
                <input
                  name="work"
                  type="text"
                  className="mb-3 form-control"
                  placeholder="Your Profession"
                  value={user.work}
                  onChange={handleInputs}
                />
                <input
                  name="password"
                  type="password"
                  className="mb-3 form-control"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleInputs}
                />
                <input
                  name="cpassword"
                  type="password"
                  className="mb-3 form-control"
                  placeholder="Confirm Password"
                  value={user.cpassword}
                  onChange={handleInputs}
                />
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="mb-3 btn btn-dark form-submit"
                  value="Register"
                  onClick={postData}
                />
              </form>
            </div>
            <div className="col-md-6 col-xs col-sm-6"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup