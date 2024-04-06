import React from "react";
import "./Home.css";
const arr3 = [
  {
    des: "It was great pleasures working with your company andeven if we could only hear through Sktype you were veryavailable and timely. A big thank you to Ketan who followed me all along the project coordinating and arranging the various steps.",
    nm: "Sacha",
  },
  {
    des: "Recommended, Serious people, they work very well",
    nm: "Aldo Bongiovanni",
  },
  {
    des: "The best app developer for Android and IPhone. Good the possibility to speak through Sktype. Thank you to Sahir and all his team. I hope to work again with them. Highly recommended.",
    nm: "Drigo Mauro",
  },
  {
    des: "Very Serious, and very professional, they try to find most suitable solution for the customer",
    nm: "Aurele igor ntwari",
  },
  {
    des: "Redbytes proved really helpful from their business  development manager through to their senior techician and team beyond.",
    nm: "Gary Mawdsley",
  },
];

const Test = () => {
  return (
    <>
      <div className="col-12 m-0 p-0 mt-5">
        <div className="row m-0 p-0 ps-lg-5 ps-0">
          <div
            className="col-lg-6 col-md-10 col-12 m-md-auto m-lg-0 p-0 m-0 text-light test"
            id="test"
          >
            <div className="d-flex justify-content-center align-items-center h-100 w-100 p-0 m-0 Test">
              <div>
                <h1 className="fw-bold display-6">Client</h1>
                <h1 className="fw-bold display-4">Testimonials</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 p-3 m-0 test1">
            <div className="w-50 m-5">
              <img src="images/laptopTest.webp" className="img-fluid" alt="" />
            </div>
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <div
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></div>
                <div
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></div>
                <div
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></div>
                <div
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></div>
                <div
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="4"
                  aria-label="Slide 5"
                ></div>
                <div
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="5"
                  aria-label="Slide 6"
                ></div>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-content p-3">
                    <h5>
                      The staff of Redbytes Software has done an excellent job
                      delivery times have been respected and I am satisfied with
                      the result, also they have remained in contact with me for
                      future & new needs. Good experience! Thank you.
                    </h5>
                    <h4 className="fw-bold mt-3">Jessica Coladonato</h4>
                  </div>
                </div>
                {arr3.map((val) => {
                  return (
                    <>
                      <div className="carousel-item">
                        <div className="carousel-content p-3">
                          <h5> {val.des} </h5>
                          <h4 className="fw-bold mt-3">{val.nm}</h4>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
