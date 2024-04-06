import React from "react";
import { Heading } from "./Heading";
import "./Home.css";
import Services1 from "./Services1";
import Icon from "./Icon";
import Client from "./Client";
import Test from "./Test";
import Test1 from "./Test1";
import Portfolio from "./Portfolio";
import AppCost from "./AppCost";
import Staffing from "./Staffing";
import Development from "./Development";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [show, setShow] = useState(false);
  var nav = useNavigate();
  const GoOurApp = () => {
    nav("/ourapp");
  };
  setTimeout(() => {
    setShow(true);
    console.log("show");
  }, 1000);

  return (
    <>
      <div className="row m-0 p-0">
        {/* heading */}
        <Heading />
        {/* image */}
        <div className="col-12 m-0 p-0">
          <img src="images/backgroundimage.png" className="img-fluid" alt="" />
        </div>
        {/* <Animation/> */}
        {/* services */}
        <Services1 />
        {/* icons */}
        <Icon />
        {/* clients */}
        <Client />
        {/* Tests */}
        <Test />
        <Test1 />
        {/* Portfolio */}
        <Portfolio />
        {/* App cost */}
        <AppCost />
        {/* Recuring and Staffing */}
        <Staffing />
        {/* Mobile App Development */}
        <Development />
        <div className="col-12 text-center p-5 mt-5">
          <h1 className="fw-medium mt-5">
            <b className="fw-bold">Get</b> a Cost Estimate for Your App
          </h1>
          <button className="btn btn_1" onClick={() => GoOurApp()}>
            Let's Work On Your Idea <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* modal */}
      
        {show ? (
          <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Modal title</h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        ): null}
      
    </>
  );
};

export default Home;
