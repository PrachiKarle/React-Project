import React from "react";
import './Home.css';
const HeadingImg=(props)=>{
   return(
    <>
       <div className="container-fluid m-0 d-flex" id="portfolio">
        <div className="text-light p-5">
          <h1>{props.name}</h1>
          <h2>{props.snm}</h2>
        </div>
        <div className="port h-100">
          <img src={props.img} className="img-fluid w-100" alt="" />
        </div>
        
      </div>
    </>
   )
}

export default HeadingImg;