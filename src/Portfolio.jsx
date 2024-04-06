import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const arr5 = [
  "images/wi-fi-attendence.webp",
  "images/rni.webp",
  "images/weshop.webp",
  "images/cal.webp",
];
const Portfolio = () => {
  var nav=useNavigate();
  const GoPortfolio=()=>{
    nav("/portfolio");
  }
  return (
    <>
      <div className="col-12 col-md-11 m-0 p-0 mt-5">
        <div className="row m-0 p-0 mt-5 portfolio">
          <div className="mt-5 p-5 col-11 text-center">
            <p className="h1 fw-bold">
              Our <b className="h4">Mobile App Portfolio</b>
            </p>

            <button className="btn btn_1 px-3" onClick={() => GoPortfolio()}>
              Explore <i className="bi bi-arrow-right"></i>
            </button>
          </div>
          <div className="col-8 m-auto p-4">
            <div className="row m-0 p-0">
              {arr5.map((val) => {
                return (
                  <>
                    <div
                      className="col-md-3 mb-5"
                      style={{ border: "10px solid #F0F3F6" }}
                    >
                      <img src={val} className="img-fluid" alt="" />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
