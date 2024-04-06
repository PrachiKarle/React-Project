import React from "react";

const Office = (props) => {
  return (
    <>
      
        <div className="p-0 m-0" style={{ height: "40vh" }}>
          <img src={props.img} className="img-fluid w-100 h-100 m-0 p-0" alt="" />
        </div>
        <div className="p-3 m-0" style={{ }}>
          <p className="fw-bold">
            <img src={props.si} alt="" /> {props.cn}
          </p>
          <h5>{props.city}</h5>
          <div className="d-flex">
            <i
              className="bi bi-geo-alt-fill text-danger"
              style={{ fontSize: "25px" }}
            ></i>
            <p className="ms-3"> {props.add}</p>
          </div>
        
          <div className="d-flex pt-2 pb-2" style={{borderTop:"1px solid #DCDCDC", cursor:"pointer"}}> <i className="bi bi-telephone-fill text-danger  me-3" style={{fontSize:"20px"}}></i>  Call us: +91 811 386 9000</div>
          <div className="d-flex pt-2" style={{borderTop:"1px solid #DCDCDC", cursor:"pointer"}}><i className="bi bi-envelope text-danger me-3" style={{fontSize:"20px"}}></i>  Write Us info@redbytes.in</div>
        </div>
      
    </>
  );
};

export default Office;
