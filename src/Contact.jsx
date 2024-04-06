import React from "react";
import './Home.css';
const Contact = () => {
  return (
    <>
      <div className="col-12 m-0 p-0">
        <div className="row m-0 p-5">
          <div
            className="col-lg-6 col-12"
            style={{ border: "5px solid white" }}
          >
            <img src="images/contact.svg" className="img-fluid" alt="" />
          </div>
          <div
            className="col-lg-6 col-12"
            style={{ border: "5px solid white" }}
          >
            <h1 className="fw-normal">Any Questions?</h1>
            <h2 className="fw-bold">Drop us a line</h2>

            <form action="">
              <input
                type="text"
                placeholder="Enter Your name"
                className="form-control"
                required
              />
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="form-control"
                required
              />
              <input
                type="text"
                placeholder="Enter Your Phone no."
                className="form-control"
                required
              />
              <textarea name="" id="" cols="" rows="5" className="form-control" placeholder="Enter Your Message">
              </textarea>
              <button className="btn btn_1 px-4">Submit <i className="bi bi-arrow-right"></i></button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
