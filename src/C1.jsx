import React from "react";

const C1 = (props) => {
  return (
    <>
      <div
        className="p-3 w-25 m-auto d-flex justify-content-center align-items-center"
        style={{ border: "2px solid red", borderRadius: "50%" }}
      >
        <i className={props.cls} style={{ color: "red", fontSize: "30px" }}></i>
      </div>

      <h3 className="text-center">{props.t}</h3>
      <h6 className="fw-normal text-center">{props.st}</h6>
    </>
  );
};

export default C1;
