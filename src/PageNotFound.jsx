import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  var nav = useNavigate();
  const GoToHome = () => {
    nav("/");
  };
  return (
    <>
      <div
        className="row m-0 p-5 d-flex justify-content-center align-items-center bg-dark text-light"
        style={{ height: "100vh" }}
      >
        <div className="col-12 m-0 p-0 text-center">
          <h1 className="fw-bold">Page Not Found</h1>
          <button className="btn btn-outline-light" onClick={() => GoToHome()}>
            Go To Home
          </button>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
