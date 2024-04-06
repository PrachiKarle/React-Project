import React from "react";
import Question from "./Question";
import Contact from "./Contact";
import "./Home.css";

const arr = [
  {
    cls: "bi bi-phone-fill",
    t: "ESTIMATE MOBILE APP DEVELOPMENT COST",
    st: "Learn how much it will cost to develop your app with Redbytes (Cost of Outsourcing to an App Development Company)",
  },
  {
    cls: "bi bi-duffle",
    t: "HIRE ON CONTRACT BASIS",
    st: "If you want to hire a developer or designer on contract so that you can directly manage them, this option will give you the cost.",
  },
  {
    cls: "bi bi-file-earmark-text",
    t: "HIRE ON PAYROLL",
    st: "Looking for great talents to join your organization in short notice? Find the best developers to join firm as permanent employees",
  },
];

const arr1 = [
  "Estimation based on your requirements",
  "Choose the devices on which app can run",
  "Decide on entailing an admin panel",
  "Users can select the platform for app development",
  "Users can decide about the features & functionalities.",
  "Number of apps you need (customer & vendor app)",
];
const arr2 = [
  "Well defined documents for each requirement.",
  "App upgrade or an app that is already developed.",
  "Already designed screens.",
  "Having a reference app.",
  "Readymade third-party cloud service storage.",
];
const arr3 = [
  [
    "Social Networking/Social media",
    "Booking apps (Hotel,flight,Taxi)",
    "Donation/Fundraising/Crowdraising",
    "Service apps (UrbanClap)",
    "Transport & Logistics",
    "E-commerce/shopping apps",
  ],
  [
    "2D Games",
    "Education & E-learning",
    "Lifestyle/health & fitness",
    "Real Estate",
    "Productivity",
  ],
];
const arr4 = [
  {
    t: "Select the kind of developers on various platforms",
    st: "You can select efficient developers of various designations here. Select multiple positions at a time for Android, iOS, Xamarin & flutter developers to hire.",
  },
  {
    t: "Decide the time you wish to hire the developer.",
    st: "Hire developers when you wish to. You can choose developers onboard whether urgent hiring or later anytime.",
  },
  {
    t: "Specify the duration of your contract.",
    st: "You can set the date of joining & the last working day for your developers. We show duration with the exact number of weeks. No tensions on further payments or concern after this duration",
  },
  {
    t: "Choose your budget.",
    st: "Some project managers withdraw their projects because of a collapsed budget plan. don't indulge in such headaches! We offer you, skilful developers, at your budget. You can select the budget starting from $1600",
  },
];
const arr5 = [
  "Time Saving Recruitment Process",
  "Reliable & Qualified Candidates",
  "Hire on Payroll/Contract basis",
  "Schedule Interviews Instantly",
];
const arr6 = [
  {
    t: "SELECT FROM THE MULTIPLE PLATFORM OPTIONS",
    st: "We provide recruitment service for Android,iOS,React native,Flutter & python developers",
  },
  {
    t: "CHOOSE THE REQUIRED PERSONNEL",
    st: "This option enables you to select candidates for various key personnel positions in your project or firm.",
  },
  {
    t: "ELABORATE JOB DESCRIPTIONS & REQUIREMENTS",
    st: "Confused about selecting reliable permanent employees? You can view elaborate job descriptions & requirements for each job title",
  },
  {
    t: "KNOW ABOUT THEIR WORK EXPERIENCE",
    st: "You can view the total & relevant experience of a candidate. We assure the most experienced developers on our list with necessary details on work experience.",
  },
  {
    t: "BOOK MEETING ASAP",
    st: "You can book a meeting with the candidate at a tap without any lag. Select a convenient slot for the interview finalized in minutes",
  },
  {
    t: "SELECT BASED ON THE EXPECTED CTC",
    st: "ach developer mentions his expected CTC along with his/her experience.",
  },
];

const OurApp = () => {
  return (
    <>
      <div className="row m-0 p-0">
        <div className="col-12 m-0 p-0 d-lg-flex d-block" id="ourapp">
          <div className="p-5 w-lg-50 w-100">
            <h1 className="fw-bold text-light display-5 fw-bold">
              Cost Calculator App
            </h1>
            <h2 className="text-light fw-normal">
              Have an amazing mobile app idea?
            </h2>
            <h5 className="text-light fw-normal">
              Find out your App’s development cost by answering a few questions
            </h5>
            <button
              className="btn btn-outline-light fw-bold px-3"
              style={{ borderRadius: "25px" }}
            >
              App Cost Calculator <i className="bi bi-arrow-right"></i>
            </button>{" "}
            <br />
            <button
              className="btn btn-outline-light fw-bold px-3 mt-3"
              style={{ borderRadius: "25px" }}
            >
              Hire App Developer Cost Calculator{" "}
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
          <div className="img_head d-lg-flex d-none">
            <img src="images/pricing.webp" className="img-fluid" alt="" />
          </div>
        </div>
      </div>

      <div className="row m-0 p-0 mt-5" style={{ backgroundColor: "#FCE8EA" }}>
        <div className="col-lg-6 col-12 m-0 p-4">
          <div className="h-100 w-100">
            <iframe
               height="100%" width="90%"
              src="https://www.youtube.com/embed/ECZS1X09bA0?si=8K9NM86ZNaJbV-fB"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="col-lg-6 col-12 m-0 p-4">
          <h2 className="fw-bold text-danger">
            APP DEVELOPMENT COST IN SECONDS!
          </h2>
          <h5 className="fw-normal">
            No more meetings, demos and detailed app requirement explanations.
            Just a few taps on your phone, and get real-time Estimation of your
            app’s development cost in minutes
          </h5>

          <p>
            <i class="bi bi-chevron-double-right text-danger"></i> 80% Accurate
          </p>
          <p>
            <i class="bi bi-chevron-double-right text-danger"></i> Detailed Cost
            Breakdown
          </p>
          <p>
            <i class="bi bi-chevron-double-right text-danger"></i> Easy sign-in
            via LinkedIn or Gmail
          </p>
          <p>
            <i class="bi bi-chevron-double-right text-danger"></i> Available on
            Android, iOS
          </p>

          <div className="d-flex justify-content-between align-items-center w-50">
            <img src="images/p1.png" className="img-fluid" alt="" />
            <img src="images/p2.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>

      <div className="row m-0" style={{ backgroundColor: "#F0F3F6" }}>
        <div className="col-md-8 col-12 d-flex align-items-center">
          <div className="py-5">
            <h3 className="text-danger fw-bold">
              <b className="text-dark fw-bold">ABOUT</b> APP COST CALCULATOR
            </h3>
            <h5 className="fw-normal">
              Redbytes app cost calculator gives you detailed cost estimation &
              timeline for each stage of app development. We offer you the
              opportunity to build your app virtually with us. The end cost is
              as per your inputs about the diverse factors of the app.
            </h5>
          </div>
        </div>
        <div className="col-md-4 col-12 p-5">
          <img src="images/calculator.png" className="img-fluid" alt="" />
        </div>
      </div>

      <div className="row m-0 p-0 mb-5">
        <div className="col-12 text-center p-5">
          <h1 className="fw-bold">WHAT WE OFFER</h1>
        </div>
        <div className="col-12 m-0 p-0">
          <div className="row m-0 p-0">
            {arr.map((val) => {
              return (
                <>
                  <div
                    className="col-md-4 col-11 m-md-0 m-auto bg-light"
                    style={{ border: "15px solid white" }}
                  >
                    <div
                      className="h-100 w-100 p-4"
                      style={{ boxShadow: "0px 0px 6px 1px gray" }}
                    >
                      <div
                        className="d-flex justify-content-center align-items-center m-auto p-3 w-25 bg-danger"
                        style={{ borderRadius: "50%" }}
                      >
                        <i
                          className={val.cls}
                          style={{ color: "white", fontSize: "30px" }}
                        ></i>
                      </div>
                      <h5 className="fw-bold text-center my-4">{val.t}</h5>
                      <p className="fw-normal">{val.st}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <div className="row m-0 p-0" style={{ backgroundColor: "#FCE8EA" }}>
        <div className="col-lg-6 col-12 py-5">
          <h3 className="fw-bold">MOBILE APP DEVELOPMENT COST</h3>
          <h5 className="fw-normal mb-5 mt-3">
            Your simple idea gets converted into amazing app solutions. Our Cost
            Calculator will provide you with detailed estimates based on your
            mobile app requirements.
          </h5>
          {arr1.map((val) => {
            return (
              <>
                <h5 className="fw-normal">
                  <i class="bi bi-record2 text-danger"></i> {val}
                </h5>
              </>
            );
          })}
        </div>
        <div className="col-lg-6 col-12 m-0 p-5">
          <img src="images/app3.jpg" className="img-fluid" alt="" />
        </div>
      </div>

      <div className="row m-0 p-0 my-5">
        <div className="col-md-4 col-12 p-5">
          <img src="images/img1.png" className="img-fluid" alt="" />
        </div>
        <div className="col-md-8 col-12 p-5">
          <h1 className="display-4 fw-bold" style={{ color: "red" }}>
            REDUCE YOUR APP COST!
          </h1>
          <h5 className="fw-normal">
            Feeling Overpriced For Your App? We Estimate Your Cost Only
            According To Your Various App Requirements. Still, We Can Help You
            Reduce The Final Cost. Simply Fill Out The Questions & Obtain Your
            Final Cost In No Time.
          </h5>
          <h4 className="my-3">Factors that can cut down your cost</h4>
          {arr2.map((val) => {
            return (
              <>
                <h5 className="fw-normal my-3">
                  <i
                    className="bi bi-check-circle-fill"
                    style={{ color: "red" }}
                  ></i>{" "}
                  {"  "}
                  {val}
                </h5>
              </>
            );
          })}

          <button className="btn btn_1 px-4 me-3 mb-3">
            Get in touch <i className="bi bi-arrow-right"></i>
          </button>
          <button className="btn btn_2 px-4 mb-3">
            Call Now +91 81138 69000 <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="row m-0 p-0">
        <div className="col-12 p-5">
          <h2 className="fw-bold">
            KNOW THE VARIOUS SERVICE CATEGORIES WE PROVIDE FOR YOUR MOBILE APP
          </h2>
        </div>
        <div className="col-12 m-0 p-0">
          <div className="row m-0 px-5">
            {arr3.map((val) => {
              return (
                <>
                  <div className="col-lg-6 col-12">
                    {val.map((i) => {
                      return (
                        <>
                          <h5 className="fw-normal">
                            <i
                              className="bi bi-check-circle-fill"
                              style={{ color: "red" }}
                            ></i>{" "}
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
        </div>
      </div>

      <div className="row m-0 p-0">
        <div
          className="col-12 m-0 mt-5 p-0 text-center py-5"
          style={{ backgroundColor: "#FCE8EA" }}
        >
          <h2 className="fw-bold">HIRE ON CONTRACT BASIS</h2>
          <h5>
            Want to manage well-qualified Redbytes developers or designers on
            your own? This would be the perfect option for you.
          </h5>
        </div>
        <div className="col-12 m-0 p-0" style={{ backgroundColor: "#FCE8EA" }}>
          <div className="row m-0 p-0 pb-5">
            {arr4.map((val) => {
              return (
                <>
                  <div className="col-lg-5 col-11 ms-lg-5 me-lg-4 my-lg-3 m-auto p-0 text-center">
                    <h5 className="fw-bold">{val.t}</h5>
                    <h6 className="fw-normal">{val.st}</h6>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <div className="row m-0 p-5">
        <div className="col-lg-6 col-12 px-3 m-0">
          <iframe
            width="90%"
            height="100%"
            src="https://www.youtube.com/embed/LmNzJ3bfq8A?si=zB6Fgx2fPaQZohAr"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="col-lg-6 col-12 m-0 p-0">
          <h1 className="text-danger">HIRING IS NOW EASY AT YOUR FINGERTIPS</h1>
          <h5 className="fw-normal">
            Redbytes app cost calculator is an all-in-one solution for a
            trouble-free recruitment process.
          </h5>
          {arr5.map((val) => {
            return (
              <>
                <h6>
                  <i class="bi bi-chevron-double-right text-danger"></i> {val}
                </h6>
              </>
            );
          })}
        </div>
      </div>

      <div className="row m-0 p-5">
        <div className="col-12 text-center">
          <h2>HIRE ON PAYROLL</h2>
          <h5 className="fw-normal">
            Want to manage well-qualified Redbytes developers or designers on
            your own? This would be the perfect option for you.
          </h5>
        </div>
        <div className="col-12">
          <div className="row mt-5">
            {arr6.map((val) => {
              return (
                <>
                  <div
                    className="col-lg-4 col-md-6 col-12 m-0 p-4"
                    style={{ borderBottom: "1px solid #D6D6D6" }}
                  >
                    <h4 className="fw-bold">{val.t}</h4>
                    <h6 className="fw-normal">{val.st}</h6>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <div className="row m-0 p-0">
        <div className="col-lg-4 col-md-3 col-12 p-5">
          <img src="images/img2.png" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-8 col-md-9 col-12 p-5" id="content_1">
          <h2 className="fw-bold">OUR DESIGN-DEVELOPMENT</h2>
          <h5> RELEASE PROCESS</h5> 
          <p> Our thought on creating an
          all-in-one app had started much earlier. But, finding out a unique
          solution was our aim. We saw many people stumbling at the beginning
          stage of app development. What is the reason? Finding the exact cost &
          the duration for developing an app is a challenging task. There are a
          lot of things that depend on how you create an app & it needs some
          homework too. </p>
          <p>How about an easy app replacing all these laborious
          stages? This marked the beginning of our app development. We
          structured a user-friendly app in our mind & formed an effective
          development team. The back end & front-end developers together created
          an amazing app solution “App cost calculator”.</p>
          <p> Hiring reliable
          employees are one of the major concerns of project managers. Every
          recruiter desire lesser hiring turnover but productive sessions with
          engaging candidates. Thus, we incorporated two types of hiring
          services </p> <li>Hiring on a contract basis where you can select from
          efficient developers on contract.</li> <li className="mb-2">Hiring on payroll enables hiring
          potential permanent employees for your firm </li> 
          <p>The app is a
          cross-platform product that is developed in React native and showcases
          the app development ability of Redbytes. We ensure accurate cost
          calculation for your app. You can start your app development with a
          clear idea of required funds & create productive app stories</p>
        </div>
      </div>

      <div className="row m-0 p-5">
        <div className="col-12 m-0 p-0 text-center">
          <h1>REDBYTES APP COST CALCULATOR</h1>
          <p>
            WANT TO MANAGE WELL-QUALIFIED REDBYTES DEVELOPERS OR DESIGNERS ON
            YOUR OWN? THIS WOULD BE THE PERFECT OPTION FOR YOU.
          </p>
        </div>
        <div className="col-4 m-auto">
          <img src="images/ourapp.png" className="img-fluid" alt="" />
        </div>
      </div>

      <Question />
      <Contact />
    </>
  );
};

export default OurApp;
