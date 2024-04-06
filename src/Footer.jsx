import React from "react";
import "./Home.css";
const arr = [
  {
    nm: "Hire App Developers",
    sp: [
      "Hire Android Developers",
      "Hire ios Developers",
      "Hire Xamarin Developers",
      "Hire Cross-Platform Developers",
      "Hire React Native Developers",
    ],
  },
  {
    nm: "Technology",
    sp: [
      "iOS App Development",
      "Firebase Development Services",
      "React Native App Development",
      "Xamarin App Development",
      "Android App Development",
      "MVP App Development",
      "Outsystems",
    ],
  },
  {
    nm: "Solutions",
    sp: [
      "Enterprise Mobile App Development",
      "Tracking And Delivery",
      "Marketplace App Development",
      "IoT App Development",
      "On Demand Services App Development",
      "Donation App Development",
    ],
  },
  {
    nm: "Our Sister Sites",
    sp: [
      "Edsys-Education Systems & Solutions",
      "Testbytes-Software Testing Services",
      "Probytes-Web Development Services",
    ],
  },
];

const arr1 = [
  {
    nm: "Industries",
    sp: [
      "Mobile Game Development",
      "Automotive Industry",
      "Ecommerce App Development",
      "Banking and Finance App Development",
    ],
  },
  {
    nm: "Other",
    sp: [
      "Industry Insights",
      "Mobile App Development Campnies In India",
      "IT Campnies In Aurangabad",
    ],
  },
];

const arr3 = [
  "images/b1.jpg",
  "images/b2.jpg",
  "images/b3.jpg",
  "images/b4.jpg",
];

const cls = [
  "bi bi-facebook",
  "bi bi-twitter",
  "bi bi-linkedin",
  "bi bi-pinterest",
];
const Footer = () => {
  return (
    <>
      <footer className="row m-0 p-5" style={{ backgroundColor: "#EFF2F5" }}>
        <div className="col-12">
          <img src="images/logo.png" className="img-fluid" alt="" />
        </div>
        <div className="col-12 m-0 p-0 mt-5 foot">
          <div className="row m-0 p-0">
            {arr.map((val) => {
              return (
                <>
                  <div className="col-lg-3 col-md-6 col-12">
                    <h4 className="fw-bold">{val.nm}</h4>
                    <ul className="mt-3">
                      {val.sp.map((i) => {
                        return (
                          <>
                            <li
                              className="fw-normal"
                              style={{ fontSize: "17px", cursor: "pointer" }}
                            >
                              {i}
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="col-12 m-0 p-0 mt-3 foot">
          <div className="row m-0 p-0">
            <div className="col-lg-3 col-md-6 col-12 m-0 p-0">
              <p className="fw-bold h4">App Maintenance & Support</p>

              <p className="fw-bold h4 mt-5">Education</p>
              <ul>
                <li style={{ fontSize: "18px" }}>Education App Development</li>
                <li style={{ fontSize: "18px" }}>Learning Management System</li>
              </ul>
            </div>
            {arr1.map((val) => {
              return (
                <>
                  <div className="col-lg-3 col-md-6 col-12 m-0 p-0">
                    <h4 className="fw-bold">{val.nm}</h4>
                    <ul className="mt-3">
                      {val.sp.map((i) => {
                        return (
                          <>
                            <li
                              className="fw-normal"
                              style={{ fontSize: "17px", cursor: "pointer" }}
                            >
                              {i}
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </>
              );
            })}
            <div className="col-lg-3 col-md-6 col-12 m-0 p-0">
              <h4 className="fw-bold">Our Blogs</h4>
              <div className="">
                {arr3.map((val) => {
                  return (
                    <>
                      <div
                        className="h-50 w-50"
                        style={{ border: "5px solid #EFF2F5", float: "left" }}
                      >
                        <img src={val} className="img-fluid" alt="" />
                      </div>
                    </>
                  );
                })}
              </div>
              <button className="btn btn_2 mt-2">
                View More 150 Blogs <i className="bi bi-arrow-right"></i>
              </button>
              <p className="h5 fw-normal mt-2">Follow us on</p>
              <div className="mt-2 text-danger d-flex">
                {cls.map((val) => {
                  return (
                    <>
                      <i
                        className={val}
                        style={{ fontSize: "25px", marginRight: "4%" }}
                      ></i>
                    </>
                  );
                })}
              </div>
            </div>

            <div className="col-12">
              <img src="images/f1.jpeg" className="img-fluid mx-2" alt="" />
              <img src="images/f12.png" className="img-fluid mx-2" alt="" />
              <img src="images/f13.jpg" className="img-fluid mx-2" alt="" />
            </div>
          </div>
        </div>
      </footer>
      <div className="row m-0 p-0">
        <div className="col-12 text-center text-light m-0 p-3" style={{backgroundColor:"red"}}>
          <b>
            Copyrights 2023, Redbytes. All rights reserved.{" "}
            <b className="text-decoration-underline">Privacy Policy</b> {" "}
            Digital Marketing by JointViews
          </b>
        </div>
      </div>
    </>
  );
};

export default Footer;
