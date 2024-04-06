import React from "react";
import { useNavigate } from "react-router-dom";
const Service1 = (props) => {
  const nav = useNavigate();

  const GoTo = () => {
    nav("/iotappdevelopment");
  };
  return (
    <>
      <img src={props.img} className="w-25 img-fluid" alt="" />
      <h5 className="mt-2">{props.mt}</h5>
      <p style={{ fontSize: "1rem" }}>{props.des}</p>
      <p style={{ fontSize: "1rem", color: "red" ,cursor:"pointer"}} onClick={() => GoTo()}>Read more...</p>
    </>
  );
};

export default Service1;
