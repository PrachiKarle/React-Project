import React from "react";
import "./Home.css";
const Service2 = (props) => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center m-auto"
        id="circle_div"
      >
        <i className={props.cls} id="i_id"></i>
      </div>
      <h3 className="text-center fw-bold mt-2" style={{ color: "red" }}>
        {props.t}
      </h3>
      <h5 className="text-center">{props.st}</h5>
    </>
  );
};
export default Service2;
