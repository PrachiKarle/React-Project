import React from "react";

export const Heading = () => {
  return (
    <>
      <div className="col-12 text-center pt-5">
        <h1 className="w-50 fw-bold m-auto display-6 my-1">
          Converting Simple Ideas into Amazing Mobile Apps!
        </h1>
        <p className="m-auto" style={{ fontSize: "18px", width: "60%" }}>
          We provide you exceptional mobile application development services for
          your ideas to take flight to the next level.
        </p>
        <div className="mt-4">
          <button
            className="btn btn_2 px-3 py-2"
            style={{ borderRadius: "25px", fontSize: "20px" }}
          >
            Calculate App Cost{" "}
            <i
              className="bi bi-arrow-right fw-bold"
              style={{ fontSize: "20px" }}
            ></i>
          </button>
          <button
            className="btn btn_1 mx-4 px-3 py-2 my-2 my-md-0"
            style={{ borderRadius: "25px", fontSize: "20px" }}
          >
            Developers Rate Calculator{" "}
            <i
              className="bi bi-arrow-right fw-bold"
              style={{ fontSize: "20px" }}
            ></i>
          </button>
        </div>
      </div>
    </>
  );
};
