import React from "react";
import "./Home.css";
const a = [
  "Easy Sign-in",
  "Estimate While Planning",
  "Customized Platform Selection",
  "Approximate Cost & Timeline",
  "No Hidden Cost",
  "Explore discounts & offers",
];
const AppCost = () => {
  return (
    <>
      <div className="col-12 m-0 p-0 mt-5">
        <div className="row m-0 p-0 ps-lg-5 ps-0 mt-5">
          <div
            className="col-lg-6 col-md-10 col-12 m-md-auto m-lg-0 p-0 m-0 text-light test"
            id="test1"
          >
            <div className="d-flex justify-content-center align-items-center h-100 w-100 p-0 m-0 Test">
              <div className="m-5">
                <h1 className="m-5">
                  <b>App</b> Cost Calculator
                </h1>
                <h5 className="fw-normal mt-4 mb-4">
                  Our app cost calculating tool provides a transparent and
                  detailed estimation of your mobile app as per the design of
                  your business. The cost is exactly calculated using your
                  inputs, the features and our team effort.
                </h5>
                {a.map((val) => {
                  return (
                    <>
                      <p style={{ fontSize: "20px" }}>
                        <i class="bi bi-check-circle-fill text-secondary"></i>{" "}
                        {val}
                      </p>
                    </>
                  );
                })}
                <button className="btn btn_1">
                  Calculate App Development Cost{" "}
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-5 m-0 test1 d-flex justify-content-center align-items-center">
            <div className="">
              <iframe
              className="w-100"
                src="https://www.youtube.com/embed/PQV51qE_pfA?si=89vT9VsAQ78L0ZVM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>

              <div className="d-md-flex d-block mt-3">
                <img src="images/p1.png" className="img-fluid" alt="" />
                <img src="images/p2.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppCost;
