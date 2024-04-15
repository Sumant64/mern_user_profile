import React, { useEffect, useState } from "react";
import { getAbout } from "../service/api";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    try {
      let token = JSON.parse(localStorage.getItem("token"));
      const res = await getAbout(token);
      setUserData(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  return (
    <>
      {loading ? (
        <>
          <div
            style={{ width: "100%", height: "80vh" }}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="border col-md-6 col-sm-6 col-xs p-4">
              <div
                className="spinner-border"
                style={{ width: "3rem", height: "3rem" }}
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            style={{ width: "100%", height: "100%" }}
            className="p-4 d-flex align-items-center justify-content-center"
          >
            <div className="border col-lg-6 col-md-10 col-sm-12 col-xs p-4">
              <div className="row">
                <div className="border-end col-md-4 col-sm-4 col-xs-12">
                  {userData?.skills &&
                    userData.skills.map((item) => {
                      return <h6>{item}</h6>;
                    })}
                </div>

                <div className="col-md-8 col-sm-8 col-sx-12">
                  <div>
                    <h4>{userData.name}</h4>
                    <p>{userData.work}</p>
                  </div>
                  <div className="mt-5 border-bottom">
                    <a
                      style={{
                        color: "black",
                        textDecoration: "none",
                        borderBottom: "2px solid blue",
                      }}
                    >
                      About
                    </a>
                  </div>
                  <div className="p-3">
                    <div className="d-flex justify-content-between">
                      <p>User id</p>
                      <p>{userData._id}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Name</p>
                      <p>{userData.name}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Email</p>
                      <p>{userData.email}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Phone</p>
                      <p>{userData.phone}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Profession</p>
                      <p>{userData.work}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default About;
