import React from "react";
import "./Home.css";
const Hire = () => {
  return (
    <>
      <div className="row m-0 px-5 py-3">
        <div className="col-8">
          <img
            src="images/logo1.svg"
            className="img-fluid h-100"
            style={{ width: "20%" }}
            alt=""
          />
        </div>
        <div className="col-4 d-flex justify-content-between align-items-center">
          <h6 className="fw-normal h_6 py-2">Mobile App Cost Calculator</h6>
          <h6 className="fw-normal h_6 py-2">Hire App Developer</h6>
        </div>
      </div>

      <div className="row m-0 p-5" id="hire_bg">
        <div className="col-lg-6 col-12 m-0 p-0">
          <h1>Needss Urgent Resource with Quality for Fast Turnaround?</h1>
          <h1 className="display-4 fw-bold" style={{ color: "#5F5DF2" }}>
            We Are Here!
          </h1>

          <h1 className="fw-bold">Calculate Developer Cost</h1>
          <button className="btn btn_4 px-4 py-2">
            <h5 className="mt-2 fw-bold">
              {" "}
              Now <i className="bi bi-arrow-right"></i>
            </h5>
          </button>
          <h5 style={{ color: "#5F5DF2" }} className="fw-bold mt-2">
            (Your 20% Discount Awaits: Start Saving Today!)
          </h5>
        </div>

        <div className="col-lg-6 col-12 m-0 px-5">
          <h2 className="fw-bold text-light text-center">
            Get The Instant Pricing!
          </h2>

          <form action="" className="m-auto text-center">
            <input
              type="text"
              placeholder="Name"
              className="p-3 form-control"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 form-control"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 form-control"
            />
            <textarea
              placeholder="Comments"
              className="form-control p-3"
            ></textarea>
            <button className="btn btn_5 px-4">Submit</button>
          </form>
        </div>
      </div>

      <div className="row m-0 p-5" style={{ backgroundColor: "#EFEFEF" }}>
        <div className="col-12 m-0 p-0 text-center">
          <h1>Select the Categories</h1>
          <h4>What Kind of a developer are you looking to hire?</h4>
        </div>

        <div className="col-12 m-0 p-0 d-flex">
          <input
            type="text"
            placeholder="Email"
            className="form-control input_field"
          />
          <input
            type="text"
            placeholder="Web"
            className="form-control mx-5 input_field"
          />
          <input
            type="text"
            placeholder="Others"
            className="form-control input_field"
          />
        </div>
      </div>

      <div className="row m-0 p-0">
        <div className="col-12 m-0 pt-3 pb-5 text-center">
          <h6 className="">
            Copyright © 2024 | www.mobileappdevelopmentcost.com All Rights
            Reserved .
          </h6>
        </div>
      </div>
    </>
  );
};

export default Hire;
