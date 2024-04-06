import React from "react";

const W1 = (props) => {
  return (
    <>
      <div className="p-5" style={{height:"90%",width:"95%",backgroundColor:"white"}} >
        <div className="" style={{ height: "60%", width: "100%" }}>
          <img src={props.img} className="img-fluid h-100 w-100" alt="" />
        </div>
        <div className="text-center" style={{height:"35%",width:"100%",marginTop:"5%"}}>
          <h5>Step {props.i}</h5>
          <h6 className="fw-normal">{props.st}</h6>
        </div>
      </div>
    </>
  );
};

export default W1;
