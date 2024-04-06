import React from "react";
import Service1 from "./Service1";
import { useNavigate } from "react-router-dom";
const arr = [
  [
    {
      img: "images/i1.svg",
      mt: "IoTApp Development",
      des: "Get started with smart IoT apps in improve your business efficiency...",
    },
    {
      img: "images/i2.svg",
      mt: "iOS App Development",
      des: "Create iOs apps with us and enjoy high ROI and a loyal customer base...",
    },
  ],
  [
    {
      img: "images/i5.svg",
      mt: "Android App Development",
      des: "Get started with smart IoT apps in improve your business efficiency...",
    },
    {
      img: "images/i6.svg",
      mt: "Firebase Development Service",
      des: "Create iOs apps with us and enjoy high ROI and a loyal customer base...",
    },
  ],
  [
    {
      img: "images/i3.svg",
      mt: "Tracking & Delivery Development",
      des: "Get started with smart IoT apps in improve your business efficiency...",
    },
    {
      img: "images/i4.svg",
      mt: "Education App Development",
      des: "Create iOs apps with us and enjoy high ROI and a loyal customer base...",
    },
  ],
];

const Services1 = () => {
 const nav=useNavigate();
 const GoTo=()=>{
  nav('/iotappdevelopment')
 }
  return (
    <>
      {/* services */}
      <div className="col-12 m-0 mt-5 p-0">
        <div className="row p-5 p-0 m-0">
          <div
            className="col-lg-6 col-12 col-md-10 m-md-auto m-lg-0 m-0 p-0 d-flex align-items-center"
            id="service_box"
          >
            <div
              className="d-flex justify-content-center align-items-center"
              id="s1"
            >
              <div className="p-5">
                <h1 className="text-light fw-bold">Our Services</h1>
                <h5 className="text-light">
                  We provide you exceptional mobile application development
                  services for your ideas to take flight to the next level.
                </h5>
                <button className="btn btn_1 px-3 py-2 my-2" onClick={()=>GoTo()}>
                  Read More <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 mt-5">
            {arr.map((val) => {
              return (
                <>
                  <div className="row ps-lg-5 ps-0">
                    <div
                      className="col-md-6 col-12 p-4"
                      style={{
                        backgroundColor: "rgb(252, 222, 227)",
                        border: "8px solid white",
                      }}
                    >
                      <Service1
                        img={val[0].img}
                        mt={val[0].mt}
                        des={val[0].des}
                      />
                    </div>
                    <div
                      className="col-md-6 col-12 p-4"
                      style={{
                        backgroundColor: "#F0F3F6",
                        border: "8px solid white",
                      }}
                    >
                      <Service1
                        img={val[1].img}
                        mt={val[1].mt}
                        des={val[1].des}
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Services1;
