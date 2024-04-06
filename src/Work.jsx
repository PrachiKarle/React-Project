import React from "react";
import "./Home.css";
import W1 from "./W1";
import Contact from "./Contact";

const arr = [
  "Cross-platform solutions",
  "Bug-free",
  "Rich UI/UX",
  "Admin Back-end",
  "Full support & Maintenance",
];
const arr1 = [
  {
    cls: "bi bi-graph-up-arrow",
    t: "Boost Profits",
  },
  {
    cls: "bi bi-people-fill",
    t: "Retain Customers",
  },
  {
    cls: "bi bi-check-circle",
    t: "Brand Recognition",
  },
  {
    cls: "bi bi-bar-chart-fill",
    t: "Increase Engagement",
  },
];

const arr2 = [
  {
    img: "images/w1.jpg",
    i:"1",
    st: "Contact us via Mail / WhatsApp / Phone",
  },
  {
    img: "images/w2.jpg",i:"2",
    st: "Designers will provide you mock-up",
  },
  {
    img: "images/w3.jpg",i:"3",
    st: "Get estimated time and money for your project",
  },
  {
    img: "images/w4.jpg",i:"4",
    st: "If you are okay, you can sign the agreement",
  },
  {
    img: "images/w5.jpg",i:"5",
    st: "Share your requirements to get them evaluated",
  },
  {
    img: "images/w6.jpg",i:"6",
    st: "Once approved, developers start working",
  },
  {
    img: "images/w7.jpg",i:"7",
    st: "When developing is over, thorough testing takes place",
  },
  {
    img: "images/w8.jpg",i:"8",
    st: "Make payments according to milestones",
  },
];

const Work = () => {
  return (
    <>
      <div className="row m-0 p-0">
        <div className="col-12 m-0 p-0  d-lg-flex d-block" id="work">
          <div className="p-5 text-light">
            <h1>How It Works</h1>
            <h2 className="fw-normal">
              Convert your Simple <br />
              Idea to an Amazing App
            </h2>
            <h5 className="fw-normal">
              Sketch, Strategise, and Convert your <br />
              Amazing Ideas to Profitable Ventures – “Mobile Apps”!
            </h5>

            <button className="btn btn_3">
              Get A Quote
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
          <div className="img_head d-lg-block d-none">
            <img src="images/work.jpeg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>

      <div className="row m-0 p-0">
        <div className="col-lg-6 col-12 py-5">
          <h1>Go Mobile with Apps that are</h1>
          {arr.map((val) => {
            return (
              <>
                <p className="fw-normal" style={{ fontSize: "18px" }}>
                  <i className="bi bi-record2 text-danger"></i> {val}
                </p>
              </>
            );
          })}
          <p className="fw-normal" style={{ fontSize: "18px" }}>
            Have the vision to create the next great app? Then, Redbytes is here
            to help you convert your app idea into reality. Be it an app for
            start-ups, consumer market, or for an established organization, we
            have the perfect blend of expertise and resources to create the best
            product indeed.
          </p>
        </div>
        <div className="col-lg-6 col-12 py-5">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/iC03o6KxyYs?si=U6gcruacsyldxIrX"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="row m-0 p-0">
        <div className="col-12 m-0 p-5 text-center">
          <h1> Advantages of Having a Mobile App</h1>
        </div>
        <div className="col-12 m-0 p-0">
          <div className="row m-0 p-0 pb-5">
            {arr1.map((val) => {
              return (
                <>
                  <div className="col-lg-3 text-center col-md-6 col-12">
                    <i
                      className={val.cls}
                      style={{
                        color: "red",
                        fontSize: "40px",
                        fontWeight: "bold",
                      }}
                    ></i>
                    <h5>{val.t}</h5>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <div className="row m-0 px-5 py-2" style={{ backgroundColor: "#FCE8EA" }}>
        <div className="col-12 m-0 py-3 text-center">
          <h1>How it Works?</h1>
        </div>
        <div className="col-12 m-0 p-0">
          <div className="row m-0 p-0">
            {arr2.map((val) => {
              return (
                <>
                  <div className="col-lg-3 col-md-6 col-12">
                    <W1 img={val.img} st={val.st} i={val.i} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <Contact/>
    </>
  );
};

export default Work;
