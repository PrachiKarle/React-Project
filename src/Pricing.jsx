import React from "react";
import "./Home.css";
import Contact from "./Contact";
import Question from "./Question";
const arr = [
  {
    img: "images/price1.png",
    nm: "Food Delivery",
    snm: " Swiggy",
  },
  {
    img: "images/price2.png",
    nm: "Food Delivery",
    snm: " Uber Eats",
  },
  {
    img: "images/price3.png",
    nm: "Social Media",
    snm: " Instagram",
  },
  {
    img: "images/price4.png",
    nm: "Food Delivery",
    snm: " Nextdoor",
  },
  {
    img: "images/price5.png",
    nm: "Food Delivery",
    snm: " Facebook",
  },
  {
    img: "images/price6.png",
    nm: "Social Media",
    snm: " TikTok",
  },
  {
    img: "images/price7.png",
    nm: "Social Media",
    snm: "  Whatsapp",
  },
  {
    img: "images/price8.png",
    nm: "Social Media",
    snm: " Hotstar",
  },
  {
    img: "images/price9.png",
    nm: "Taxi Booking",
    snm: " Uber",
  },
  {
    img: "images/price10.png",
    nm: "Taxi Booking",
    snm: "  Ola",
  },
  {
    img: "images/price11.png",
    nm: "Video Chat",
    snm: " Zoom",
  },
  {
    img: "images/price12.png",
    nm: "Ecommerce",
    snm: " Flipkart",
  },
  {
    img: "images/price13.png",
    nm: "Ecommerce",
    snm: "  Meesho",
  },
  {
    img: "images/price14.png",
    nm: "Video Chat",
    snm: " TaskRabbit",
  },
  {
    img: "images/price15.png",
    nm: "On Demand Service",
    snm: " UrbanClap",
  },
  {
    img: "images/price16.png",
    nm: "On Demand Service",
    snm: "  1mg",
  },
  {
    img: "images/price17.png",
    nm: "On Demand Service",
    snm: " BigBasket",
  },
  {
    img: "images/price18.png",
    nm: "On Demand Service",
    snm: " Airtasker",
  },
  {
    img: "images/price19.png",
    nm: "Healthcare",
    snm: "  MyFitnessPal",
  },
  {
    img: "images/price20.png",
    nm: "Education",
    snm: " Byju’s",
  },
  {
    img: "images/price21.png",
    nm: "Education",
    snm: " Unacademy",
  },
  {
    img: "images/price22.png",
    nm: "Education",
    snm: "  Coursera",
  },
  {
    img: "images/price23.png",
    nm: "Education",
    snm: " Udemy",
  },
  {
    img: "images/price24.png",
    nm: "Booking",
    snm: " OYO",
  },
  {
    img: "images/price25.png",
    nm: "Sports",
    snm: "  Dream11",
  },
  {
    img: "images/price26.png",
    nm: "Ticket Booking",
    snm: " StubHub",
  },
  {
    img: "images/price27.png",
    nm: "Productivity",
    snm: " SHAREit",
  },
];


const Pricing = () => {
  return (
    <>
      <div className="row m-0 p-0">
        {/* header */}
        <div className="col-12 m-0 d-lg-flex d-block" id="price">
          <div className="p-5 text-light">
            <h1 className="fw-bold display-5">Pricing</h1>
            <h4 className="fw-bold">Have an amazing mobile app idea?</h4>
            <h5>
              Find out your App’s development cost by <br /> answering a few questions
            </h5>
            <button
              className="btn btn-outline-light px-3 mt-3"
              style={{ borderRadius: "25px" }}
            >
              App Cost Calculator <i className="bi bi-arrow-right"></i>
            </button>{" "}
            <br />
            <button
              className="btn btn-outline-light mt-3 px-3"
              style={{ borderRadius: "25px" }}
            >
              App Test Cost Calculator <i className="bi bi-arrow-right"></i>
            </button>
          </div>
          <div className="img_head d-lg-flex d-none">
            <img src="images/pricing.png" className="img-fluid" alt="" />
          </div>
        </div>
        {/* heading */}
        <div className="col-12 p-4 text-center">
          <h1 className="fw-bold">
            Cost to Develop Apps Similar to Popular Business
          </h1>
        </div>
        {/* pricing app */}
        <div className="col-12 m-0 p-0 ">
          <div className="row m-0 p-5">
            {arr.map((val) => {
              return (
                <>
                  <div
                    className="col-lg-4 col-md-6 col-12 d-flex bg-light"
                    style={{ border: "35px solid white" }}
                  >
                    <div className="" style={{ width: "40%" }}>
                      <div className="mt-5 d-flex justify-content-center align-items-center">
                        <img src={val.img} className="img-fluid pb-0" alt="" />
                      </div>
                      <h6 className="text-center mt-3 fw-bold">{val.nm}</h6>
                    </div>
                    <div className="p-3" style={{ width: "60%" }}>
                      <h5>Create an App like {val.snm}</h5>
                      <h6 className="text-danger" style={{ cursor: "pointer" }}>
                        How to create?
                      </h6>
                      <h6 className="text-danger" style={{ cursor: "pointer" }}>
                        How much it will cost?
                      </h6>
                      <button className="btn btn_1">View Our Price</button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        {/* Questions */}
        <Question/>

        {/* contact */}
        <Contact/>
      </div>
    </>
  );
};

export default Pricing;
