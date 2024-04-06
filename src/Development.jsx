import React from "react";
import { useNavigate } from "react-router-dom";
const arr = [
  "Developer Experience",
  "Intuitive Design and Strategic Frameworks",
  " No Compromise on Quality",
  "App Are Rigorously tested",
  "Accessible and responsive business team",
  "Tailored methodologies And Focused Approch",
  "Diverse clients globally using diverse technology",
];
const Development = () => {
  var nav=useNavigate();
  const gotTo=()=>{
    nav('/howwework')
  }
  return (
    <>
      <div className="col-12 p-0 m-0">
        <div className="row m-5 p-5">
          <div className="col-12 m-0 p-0 text-center">
            <h1 className="fw-normal m-auto">
              <b className="fw-bold">We</b> Have a simple, easy-to-follow
              development process
            </h1>
            <button className="btn btn_1 mt-4" onClick={()=>gotTo()}>
              Lets Work on Your Idea <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="row m-0 p-0">
          <div
            className="col-lg-6 col-12 m-0 test4 test1"
            style={{ padding: "5% 15% 15% 3%" }}
          >
            <h2>
              <b>Why</b> Redbytes Mobile App Development Company
            </h2>

            <iframe
              style={{margin:"5%"}}
              src="https://www.youtube.com/embed/iC03o6KxyYs?si=pK5qHl7RKc14Is1S"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-lg-5 me-lg-5 me-0 col-12 m-0 p-0 test5" id="dev">
            <div className="develop h-100 w-100 p-5">
              {arr.map((val) => {
                return (<>
                <h5 className="text-light ms-2 mt-3"><i className="bi bi-check-circle-fill"></i> {val}</h5>
                </>);
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Development;
