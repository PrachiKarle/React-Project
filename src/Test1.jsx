import React from "react";
import { useNavigate } from "react-router-dom";

const Test1 = () => {
  var nav = useNavigate();
  const GoContact = () => {
    nav("/contact");
  };
  return (
    <>
      <div className="col-lg-6  m-lg-0 m-md-auto m-0 col-12 test4 test1 p-5">
        <div style={{ borderRadius: "50%", height: "30%", width: "30%" }}>
          <img
            src="images/kishore-l.jpg"
            style={{ borderRadius: "50%" }}
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="mt-4 pt-5">
          <p className="w-75 h5 fw-normal">
            Tell us about your app idea to get the custom quote. Our experts
            offer free consultation to every prospect.
          </p>
          <button className="btn btn_1 mt-2" onClick={() => GoContact()}>
            Talk To our Expert <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="col-lg-5 p-0 m-0  me-5 col-12 test5">
        <img src="images/10003.webp" className="img-fluid" alt="" />
      </div>
    </>
  );
};

export default Test1;
