import React from "react";
const arr2 = [
  ["images/c1.png", "images/c2.png", "images/c3.png"],
  ["images/c4.png", "images/c5.png", "images/c6.png"],
  ["images/c7.png", "images/c8.png", "images/c9.png"],
  ["images/c10.png", "images/c11.png", "images/c12.png"],
];
const Client = () => {
  return (
    <>
      {/* Clients */}
      <div className="col-12 m-0">
        <div className="row p-5">
          <div className="col-12 text-center">
            <b className="h1">
              Our <b className="fw-bold">Clients</b>
            </b>
          </div>

          <div className="col-lg-8 m-auto col-md-10 col-12 m-0">
            <div className="row p-3">
              {arr2.map((val) => {
                return (
                  <>
                    {val.map((i) => {
                      return (
                        <>
                          <div
                            className="col-lg-3 col-md-5 col-12 m-3 d-flex justify-content-center align-items-center py-3"
                            id="client_box"
                          >
                            <img src={i} className="img-fluid" alt="" />
                          </div>
                        </>
                      );
                    })}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
