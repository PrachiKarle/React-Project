import React from "react";
import C1 from "./C1";
import Office from "./Office";
import C2 from "./C2";

const arr = [
  {
    cls: "bi bi-envelope",
    t: "Mail",
    st: "Write us up at “info@redbytes.in” and share your business idea so we can come up with the most cost-effective developing strategy with better return on investment.",
  },
  {
    cls: "bi bi-headphones",
    t: "Red Line (Toll-Free)",
    st: "Interested in our services? Just pick-up your phone and dial from anywhere in the world to express your ideas and share your requirements with with our sales team +91 81138 69000",
  },
  {
    cls: "bi bi-whatsapp",
    t: "WhatsApp",
    st: "Reach us quickly on WhatsApp for a simple, secure & reliable way to to chat with our sales team or connect to HR. +19295521900",
  },
  {
    cls: "",
    t: "",
    st: "",
  },
  {
    cls: "bi bi-chat-dots-fill",
    t: "Hybrid Chatbot",
    st: "Get specific & clear answers to your queries with our specially designed chatbot with relevant information & instant accessibility across our services.",
  },
  {
    cls: "bi bi-telephone",
    t: "Call Scheduling Using App",
    st: "Want to discuss details about your app idea to us at a convenient time? You can schedule call using our app at no cost using the schedule call option in our app.",
  },
];

const arr1 = [
  {
    img: "images/office1.jpg",
    simg: "images/f1.gif",
    cn: "India",
    city: "Pune",
    add: "25/2, Sainiketan Colony, Kalas road, Vishrantwadi, Pune, Maharashtra-411015",
  },
  {
    img: "images/office2.jpg",
    simg: "images/f1.gif",
    cn: "India",
    city: "Thiruvananthapuram",
    add: "Second Floor, T.C. 67 /96/L3 & 14, of SMH Complex, Opp: Higher Secondary School, Kamaleswaram, Thiruvananthapuram - 695 009",
  },
  {
    img: "images/office3.jpg",
    simg: "images/f1.gif",
    cn: "India",
    city: "Aurangabad",
    add: "Address - Software Technology Park of India. MIDC industrial area, Chikalthana, Aurangabad, Maharashtra.",
  },
  {
    img: "images/office4.jpg",
    simg: "images/f2.png",
    cn: "UK",
    city: "Find Us",
    add: "3 Hardman Square, Spinningfields, Manchester, M3 3EB, UK",
  },
];

const Contacts = () => {
  return (
    <>
      <div className="row m-0 p-0">
        <div className="col-12 m-0 p-0 d-lg-flex d-block" id="contacts">
          <div className="p-5">
            <h1 className="text-light fw-bold display-4">Contact Us</h1>
            <h1 className="text-light fw-normal">
              Connect with us the way <br /> you want to.
            </h1>
            <h5 className="fw-normal text-light">
              You can send us a traditional mail or ping us on whatsapp. <br />If you
              want a quick call, <br />you can do so free of cost from anywhere in the
              world Red Line – <br />our toll-free number or schedule a call with us. <br />
              If you are looking for real-time chat response, our chatbot <br /> is a
              great tool. You will have to download our app for that though.
            </h5>

            <button
              className="btn btn-outline-light mt-3 px-4 fw-bold"
              style={{ borderRadius: "25px" }}
            >
              App Development Cost Calculator{" "}
              <i className="bi bi-arrow-right"></i>
            </button> <br />
            <button
              className="btn btn-outline-light mt-3 px-4 fw-bold"
              style={{ borderRadius: "25px" }}
            >
              Hire App developer Cost Calculator{" "}
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
          <div className="img_head d-lg-flex d-none">
            <img src="images/contact.webp" className="img-fluid" style={{height:"90%"}} alt="" />
          </div>
        </div>
      </div>

      <div className="row m-0 p-0 pb-5">
        {arr.map((val) => {
          return (
            <>
              <div
                className="col-lg-4 col-md-6 col-12 p-4"
                style={{ boxShadow: "0px 0px 10px 2px #DBDBDB" }}
              >
                {val.cls != "" && val.t != "" && val.st != "" ? (
                  <C1 cls={val.cls} t={val.t} st={val.st} />
                ) : <C2/>}
              </div>
            </>
          );
        })}
      </div>

      <h1 className="text-center my-3">Our Office</h1>
      <div className="row m-0 p-0 pb-5" style={{backgroundColor:"#F8F9FA"}}>
        {arr1.map((val) => {
          return (
            <>
              <div className="col-lg-3 col-md-6 col-12 p-0" style={{border:"10px solid #F8F9FA",backgroundColor:"white"}}>
                <Office  img={val.img} si={val.simg} cn={val.cn} city={val.city} add={val.add}/>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Contacts;
