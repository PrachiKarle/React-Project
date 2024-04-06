import React from "react";

const PortCard=(props)=>{
    return(
        <>
        <div className="card my-4" style={{height:"100vh"}}>
            <div className="card-body m-0 p-0" style={{height:"55%"}}>
                <img src={props.img} className="img-fluid w-100 h-100" alt="" />
            </div>
            <div className="card-footer text-center p-4" style={{height:"45%"}}>
                <h3>{props.nm}</h3>
                <p className="fw-normal">{props.des}</p>
                <button className="btn btn_2">Read More <i className="bi bi-arrow-right"></i></button>
            </div>
        </div>
        </>
    )
}

export default PortCard;