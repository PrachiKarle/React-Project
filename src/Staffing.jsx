import React from "react";
import { useNavigate } from "react-router-dom";
const arr = [
  {
    icon: "images/ecommerce.svg",
    nm: "Ecommerce",
  },
  {
    icon: "images/education.svg",
    nm: "Education",
  },
  {
    icon: "images/iot.svg",
    nm: "IOT",
  },
  {
    icon: "images/automative.svg",
    nm: "Automative",
  },
  {
    icon: "images/games.svg",
    nm: "Games",
  },
  {
    icon: "images/tracking.svg",
    nm: "Tracking",
  },
];
const Staffing = () => {
  var nav=useNavigate();
  const GoContact=()=>{
    nav("/contact");
  }
  return (
    <>
      <div className="col-12 m-0 p-5 text-center">
        <h1>
          <b className="fw-bold">Want </b>To Build similar Apps?
        </h1>
        <button className="btn btn_1" onClick={()=>GoContact()}>
          Let's Work on Your Idea <i className="bi bi-arrow-right"></i>
        </button>
      </div>
      <div className="col-12 m-0 p-0 mt-5">
        <div className="row m-0 ps-lg-5 p-0">
          <div className="col-lg-6 col-md-10 col-12 p-0 m-md-auto m-0 m-lg-0 test">
            <img src="images/t1.webp" className="img-fluid w-100 h-100" alt="" />
          </div>
          <div className="col-lg-6 col-12 m-0 p-5 test1">
            <h1 className="display-5 w-50 ms-5 mt-5">
              <b className="fw-bold">Staffing</b> & Recruiting
            </h1>
            <p className="ms-5 h5 fw-normal">
              The traditional Hiring process involves multiple time-consuming
              stages. We offer you an opportunity to hire skillful developers at
              simple taps. Improve your hiring process productively with us and
              hire developers or designers with prodigious experiences in your
              firm. Try our one-stop talent pool for diverse job positions now.
            </p>
            <div className="d-md-flex d-block mt-3 ms-5">
              <div>
                <h5 className="fw-medium">Hire on Payroll</h5>
                Find the best developers to join your firm as reliable permanent
                Developers.
              </div>
              <div>
                <h5 className="fw-medium">Hire on Contract Basis</h5>
                Manage developers or designers on a contract basis and gain maximum benefits for your firm.
              </div>
            </div>
            <button className="btn btn_1 ms-5 mt-3" onClick={()=>nav('/hire')}>
              Hire Developer Now <i className="bi bi-arrow-right"></i></button>
          </div>
        </div>
      </div>
      <div className="col-12 m-0 p-0">
        <div className="row m-0 p-0">
          <div className="col-lg-6 col-12 m-0 p-5 pe-0 test4 test1">
            {arr.map((val) => {
              return (
                <>
                  <div className="m-3 d-flex">
                    <img
                      src={val.icon}
                      className="img-fluid"
                      style={{ height: "12%", width: "12%" }}
                      alt=""
                    />
                    <pre className="h4 fw-normal mt-4"> {val.nm}</pre>
                  </div>
                </>
              );
            })}
          </div>
          <div className="col-lg-5 col-12 m-0 p-0 test5" id="staffing">
            <div
              className="w-100 h-100 d-flex justify-content-center align-items-center"
              id="staff"
            >
              <div className="p-5">
                <h1 className="display-3 fw-bold text-light ps-5">
                  <b>Different</b> Industries We Share
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Staffing;
