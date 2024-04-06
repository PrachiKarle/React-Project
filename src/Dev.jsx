import React from "react";
import "./Home.css";
import Contact from "./Contact";

const arr = [
  [
    "Real-time decision making",
    "Generate better revenue",
    "Improved marketing automation",
  ],
  [
    "Optimized use of resources",
    "Smart & enriched supply chain",
    "Enhanced connectivity in different domains",
  ],
];

const arr1 = [
  {
    img: "images/developers.png",
    cnt: "50+",
    nm: "Developers",
  },
  {
    img: "images/apps.png",
    cnt: "351+",
    nm: "Apps",
  },
  {
    img: "images/clients.png",
    cnt: "300+",
    nm: "Clients",
  },
  {
    img: "images/installs.png",
    cnt: "3M+",
    nm: "Install",
  },
];

const arr2 = [
  {
    img: "images/d1.png",
    t: "Ideate",
    st: "At this stage, we tend to define the roadmap for the application development. We gather requirements, understand your goals, and take feedback from your customers.",
  },
  {
    img: "images/d2.png",
    t: "Prototype",
    st: "The next step is prototyping. We build prototypes for your IoT application to give you an idea of how it will look, and what will be connected where.",
  },
  {
    img: "images/d3.png",
    t: "Architecture",
    st: "We start building the architecture at the micro level. Further, we detail out the end-to-end blueprints and converge them with cloud, mobile, and analytics for the best results.",
  },
  {
    img: "images/d4.png",
    t: "Design & Development",
    st: "Here, we use the agile methodology to ensure development and testing of sprints. We ensure completely tested applications for your enterprise.",
  },
  {
    img: "images/d5.png",
    t: "Testing",
    st: "Here, we use the agile methodology to ensure development and testing of sprints. We ensure completely tested applications for your enterprise.",
  },
  {
    img: "images/d6.png",
    t: "Monitor",
    st: "n order to make advancements and improvements as needed, we keep the applications under scrutiny and keep monitoring and evaluating them.",
  },
];

const arr3 = [
  [
    "Voice-enabled technologies",
    "Socket Programming",
    "Wi-Fi connected Devices",
    "BLE - Bluetooth Low Energy",
    "Third-Party Hardware Integration",
  ],
  [
    "Two-factor Authentication",
    "Background Services",
    "Bluetooth Connectivity",
    "Data Stream",
    "Offline-Online Syncing",
  ],
];
const arr4 = [
  {
    img: "images/aqua.png",
    t: "Aquasound",
    st: "This app helps you automate home devices with your smartphone/tablet to stream any of your favorite services anytime.",
  },
  {
    img: "images/lear.png",
    t: "Lear App",
    st: "This automated seating app is one such app that can manage the seat positions, and the user need not interact with the seat to change the seat configurations..",
  },
  {
    img: "images/linx.png",
    t: "SWF iLinx",
    st: "This app is designed in such a way that a large number of networked devices are integrated as a single coordinated system.",
  },
];

const arr5 = [
  [
    "Connected Home Icon",
    "Automotive",
    "Healthcare",
    "Transportation & Logistics",
    "Retail",
    "Manufacturing",
  ],
  [
    "IoT Consultancy",
    "IoT Solutions",
    "IoT Architecture Development",
    "IoT Module Development",
    "IoT Testing",
    "Support & Maintenance",
  ],
];

const arr6 = [
  {
    q: "1. Which industries focus on IoT app development services?",
    a: "Healthcare, automotive, retail, manufacturing, construction, energy, smart city, home automation, wearables, etc.",
  },
  {
    q: "4. How long does it take to develop an IoT app solution?",
    a: "This is completely based on the project requirement. A minimum of 2-3 months would be taken to complete a project.",
  },
  {
    q: "2. How much cost-effective is it to build IoT solutions?",
    a: "If done in the right way, IoT app development can increase the ROI and operational efficiency of an app. This can help in delivering exceptional customer experience.",
  },
  {
    q: "5. Can you help us connect to the cloud?",
    a: "Yes. Starting from the IoT project setup to the gateway, cloud servers, to analytics, we can help you with the whole app development processs.",
  },
  {
    q: "3. How do you ensure the security of an IoT system in terms of data exchange?",
    a: "Data communication is protected using hybrid data encryption standards.",
  },
  {
    q: "6. Which are the technologies we use to develop IoT mobile app?",
    a: "We have solid experience in creating IoT app solutions in development platforms like Android and iOS. The technologies we mainly use are Bluetooth, WiFi, WiFi-Direct, Bluetooth smart, Zigbee, iBeacons, and NFC to offer cutting-edge IoT solutions for your business.",
  },
];

const Dev = () => {
  return (
    <>
      <div className="row m-0 p-0">
        <div className="col-12 m-0 p-0 d-lg-flex d-block" id="dev1">
          <div className="p-5 text-light w-50">
            <h1 className="fw-bold display-5">IoT App Development</h1>
            <h5 className="fw-normal">
              Create spectacular connected systems to increase transparency and
              maximize ROI!
            </h5>
            <button
              className="btn btn-outline-light px-4 mt-3"
              style={{ borderRadius: "25px" }}
            >
              IOT App development Cost <i className="bi bi-arrow-right"></i>
            </button> <br />
            <button
              className="btn btn-outline-light px-4 mt-3"
              style={{ borderRadius: "25px" }}
            >
              Hire App developer cost Calculator{" "}
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
          <div className="img_head d-lg-flex d-none">
            <img src="images/portal.jpg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>

      <h2 className="px-5 py-3 text-danger fw-bold">Advantages</h2>
      <div className="row m-0 px-5 py-3">
        {arr.map((val) => {
          return (
            <>
              <div className="col-lg-6 col-12">
                {val.map((i) => {
                  return (
                    <>
                      <h5
                        className="p-3"
                        style={{ borderBottom: "1px solid #DDDDDD" }}
                      >
                        <i class="bi bi-chevron-double-right text-danger fw-bold"></i>{" "}
                        {i}
                      </h5>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
      <button
        className="btn btn-dark px-4 m-5"
        style={{ borderRadius: "25px" }}
      >
        Contact Us
      </button>

      <div className="row m-0 p-0" style={{ backgroundColor: "#320E0E" }}>
        <div className="col-lg-2 col-md-3 col-sm-6 col-12 mx-md-3 mx-auto p-4 text-center">
          <img src="images/developementlogo.png" className="img-fluid" alt="" />
        </div>
        {arr1.map((val) => {
          return (
            <>
              <div className="col-lg-2 col-md-3 col-sm-6 col-12 mx-md-3 mx-auto p-4 text-center">
                <img src={val.img} className="img-fluid" alt="" />
                <h5 className="text-light mt-3 fw-bold">
                  <b className="text-danger">{val.cnt}</b> {val.nm}
                </h5>
              </div>
            </>
          );
        })}
      </div>

      <div className="container-fluid m-0 p-0" id="bg">
        <div className="row m-0 p-4" id="bg1">
          <div className="col-12 text-center p-5">
            <h2 className="text-light">Our IoT Development Process</h2>
            <h5 className="text-light">
              We have devised a unique and workable IoT development process that
              helps us cater to your needs, and build applications that suit
              your purpose.
            </h5>
          </div>

          <div className="col-12 m-0 p-0">
            <div className="row">
              {arr2.map((val) => {
                return (
                  <>
                    <div className="col-lg-6 col-12 text-light">
                      <div
                        className="d-md-flex d-block p-4"
                        style={{ width: "95%", height: "90%" }}
                        id="bg2"
                      >
                        <div className="d-flex w-md-75 w-100">
                          <img src={val.img} className="img-fluid" alt="" />
                        </div>
                        <div className="ms-md-5 ms-0 mt-2 mt-md-0">
                          <h3>{val.t}</h3>
                          <h6>{val.st}</h6>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="row m-0 p-0">
        <div className="col-lg-4 col-12 p-5">
          <img src="images/iot_img.png" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-8 col-12 p-5">
          <h3 className="">Benefits of Having Banking Apps</h3>
          <h5 className="fw-normal my-3">
            IoT apps are an important part of the connected future, creating
            smarter, connected solutions, and impacting people meaningfully. We
            help businesses to bring their IoT ideas to life with lean and
            effective development.
          </h5>
          <div className="d-md-flex d-block">
            {arr3.map((val) => {
              return (
                <>
                  <div className="w-md-50 w-100">
                    {val.map((i) => {
                      return (
                        <>
                          <h5 className="text-danger fw-normal my-3">
                            <i class="bi bi-record2 text-dark"></i> {i}
                          </h5>
                        </>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
          <button className="btn btn_1">Check IoT App Development Cost</button>
        </div>
      </div>

      <div className="row m-0 p-0" style={{ backgroundColor: "#851A20" }}>
        <div className="col-lg-3 col-md-6 col-12 text-center py-5">
          <img src="images/calcu_img.png" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-9 col-md-6 col-12 py-5 px-0">
          <h3 className="text-light fw-bold">
            Want to know your App’s development cost?
          </h3>
          <button
            className="btn text-light mt-2"
            style={{ border: "1px solid white" }}
          >
            Check Cost Calculator
          </button>
        </div>
      </div>

      <div className="container-fluid m-0 p-0" id="portfolios_1">
        <div className="row m-0 p-5" id="portfolios_2">
          <div className="col-12 text-light text-center">
            <h1 className="">PORTFOLIO</h1>
          </div>

          <div className="col-12 m-0 p-0">
            <div className="row m-0 p-0">
              {arr4.map((val) => {
                return (
                  <>
                    <div className="col-lg-4 col-12 m-0 p-0">
                      <div
                        className="text-center py-5 px-2"
                        style={{
                          width: "90%",
                          height: "90%",
                          backgroundColor: "white",
                        }}
                      >
                        <div>
                          <img src={val.img} className="img-fluid" alt="" />
                        </div>
                        <h4 className="my-2">{val.t}</h4>
                        <h6 className="fw-normal">{val.st}</h6>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="row m-0 p-5" id="iot">
        <div className="col-lg-4 col-12 m-0 p-0">
          <h2 className="mb-2">Industries That We Have Served</h2>
          {arr5[0].map((val) => {
            return (
              <>
                <h6
                  className="text-danger py-2 "
                  style={{ borderBottom: "1px solid #C3C3C3" }}
                >
                  <i class="bi bi-record2 text-dark"></i> {val}
                </h6>
              </>
            );
          })}
        </div>
        <div className="col-lg-4 col-12">
          <img src="images/iot.png" className="img-fluid h-100" alt="" />
        </div>
        <div className="col-lg-4 col-12 m-0 p-0">
          <h2 className="mb-2">Services You Can Avail</h2>
          {arr5[1].map((val) => {
            return (
              <>
                <h6
                  className="text-danger py-2 "
                  style={{ borderBottom: "1px solid #C3C3C3" }}
                >
                  <i class="bi bi-record2 text-dark"></i> {val}
                </h6>
              </>
            );
          })}
        </div>
      </div>

      <div className="row m-0 p-0 appdev" id="">
        <div className="col-12 text-center text-light p-5">
          <h2>Hire Mobile App Developer</h2>
          <h5 className="fw-normal my-3">
            Our dedicated mobile app developers can take care of all your
            development needs and deliver mobile applications that help you
            scale up your business and improve your ROI.
          </h5>
          <button
            className="btn btn-outline-light px-4"
            style={{ borderRadius: "25px" }}
          >
            Now Hire
          </button>
        </div>
      </div>

      <div className="row m-0 p-0 py-5" style={{ backgroundColor: "#F3F0E8" }}>
        <h2 className="mb-5">Frequently Asked Questions</h2>

        {arr6.map((val) => {
          return (
            <>
              <div className="col-lg-6 col-12 m-0 my-2 p-0">
                <div
                  className="text-center m-auto"
                  style={{ width: "90%", height: "70%" }}
                >
                  <h5 className="fw-bold">{val.q}</h5>
                  <h5 className="fw-normal">{val.a}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="row m-0 p-0">
        <div className="col-12 text-center p-5">
          <h4>
            Redbytes has incorporated first-class IoT app services connecting
            numerous everyday activities at your fingertips.
          </h4>
          <button className="btn btn_1 px-4 py-2">Download PPT</button>
        </div>
      </div>

      <div className="row m-0 p-0 appdev" id="">
        <div className="col-12 text-center text-light p-5">
          <h3>App Maintenance</h3>
          <h6 className="fw-normal">APP Launched Successfully… But Does It Still Require Regular Follow-ups? Redbytes Can Help You…</h6>
          <button className="btn btn-outline-light">We Care</button>
        </div>
      </div>

      <Contact/>
    </>
  );
};
export default Dev;
