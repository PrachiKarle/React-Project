import React from "react";
import "./Home.css";
import { useState } from "react";
import PortCard from "./PortCard";

const arr = [
  {
    img: "images/port1.png",
    nm: "SAHRDAYA",
    des: "Sahrdaya is an online donation app where users are able to create, manage and participate in diff...",
  },
  {
    img: "images/port2.png",
    nm: "SWF iLinx",
    des: "SWF iLinx is an IoT based app which is designed in such a way that a very large number of network...",
  },
  {
    img: "images/port3.png",
    nm: "Pricentric Genie",
    des: "Amazon Alexa,  is virtual assistant AI technology developed by Amazon. Alexa skill for Pricentric...",
  },

  {
    img: "images/port4.png",
    nm: "PSC Golf App",
    des: "This United States Golf Association (USGA) Handicap App lets PSC members record every round of go...",
  },
  {
    img: "images/port5.png",
    nm: "FastPizz App",
    des: "In case of Pizzeria operators, to make the ordering process streamlined and simple has become inc...",
  },
  {
    img: "images/port6.png",
    nm: "MES PIZZA",
    des: "Mespizza is an app dedicated to pizza delivery specifically. Users can select pizza store near by...",
  },
  {
    img: "images/port7.png",
    nm: "Web Shop",
    des: "We Shop is a platform to connect the buyers & sellers to fulfill their needs. It’s an online ...",
  },
  {
    img: "images/port8.png",
    nm: "TeamWork Organizer",
    des: "TeamWork Organizer, the organizer par excellence. For private events, business events or logistic...",
  },
  {
    img: "images/port9.png",
    nm: "MEELO",
    des: "1) Meelo is a productivity work space to make your work simple 2) Efficiently perform a wide vari...",
  },
  {
    img: "images/port10.png",
    nm: "Hearing Aid",
    des: "As deaf people are unable to hear critical warning sounds like alarms and sirens, their safety is...",
  },
  {
    img: "images/port11.png",
    nm: "EYE IN SKY",
    des: "...",
  },
  {
    img: "images/port12.png",
    nm: "NAUSICAA",
    des: "Nausicaa is a unique environment of the Marine Discovery Centre of its kind, at once entertaining...",
  },
];
const arr1=[
  {
    img: "images/port8.png",
    nm: "TeamWork Organizer",
    des: "TeamWork Organizer, the organizer par excellence. For private events, business events or logistic...",
  },
  {
    img: "images/port9.png",
    nm: "MEELO",
    des: "1) Meelo is a productivity work space to make your work simple 2) Efficiently perform a wide vari...",
  },
]
const arr2=[
  {
    img: "images/port13.png",
    nm: "Sufi Comics",
    des: "Sufi Comics are short cartoons that illustrate the eternal spiritual truths in the teachings of I..."
  },
  {
    img: "images/port14.png",
    nm: "Math Be Nimble – Brain Training",
    des: "You can stay strong , no matter what age or level of math you are – be agile with Math ! It is a ..."
  },
  {
    img: "images/port15.png",
    nm: "Quiz Time",
    des: "Quiz Time is a free game that enlightens and entertains you. Make your free time more fun-filled,..."
  },

  {
    img: "images/port16.png",
    nm: "Answerary",
    des: "Answerary is an innovative app that helps students post their homework and get it solved anytime....",
  },
  {
    img: "images/port17.png",
    nm: "New India Model School App",
    des: "Education and progress of your children is paramount . But is busy schedule get in your way ? If ..."
  },
  {
    img: "images/port18.png",
    nm: "Music App",
    des: "Teacher and students will use the application with which the teacher will upload their music file...",
  },
  {
    img: "images/port19.png",
    nm: "KOAN",
    des: "Koan is an Online Assessment Platform. It allows teachers to create tests using the curriculum wi..."
  },
  {
    img: "images/port20.jpg",
    nm: "Patel Tutorials",
    des: "Are you concerned about how to get prepared for national-level examinations such as UPSC, PSC, et..."
  },
  {
    img: "images/port21.png",
    nm: "KPMG India",
    des: "KPMG India app is free to download and provides an overview of the world to build on the business...",
  },
]
const arr3=[
  {
    img: "images/port22.png",
    nm: "KIMS",
    des: "This is a discharge accelerator app that can be used in the hospital to make the process of disch..."
  },
  {
    img: "images/port23.png",
    nm: "123 Clic",
    des: "An integrated platform that helps customers and vendors to get a reliable, convenient and timely ...",
  },
  {
    img: "images/port23.jpg",
    nm: "Sehatmand",
    des: "Sehatmand is one of the fastest-growing healthcare app in India providing genuine medicines &...",
  },

]
const arr4=[
  {
    img: "images/port24.png",
    nm: "Waldquiz",
    des: "Teach your children about forests, including the whole variety of plants and animals living insid...",
  },
  {
    img: "images/port25.png",
    nm: "Fun With Quiz",
    des: "Fun with Quiz is a fun app combined with knowledge for kids, preschoolers and toddlers. This app ...",
  },
]

const Portfolios = () => {
  const initialState=[
     true,false,false,false,false
  ]
  const [state, setState] = useState(initialState);
  const change1=()=>{
    setState([false,true,false,false,false]);
  }
  const change2=()=>{
    setState([false,false,true,false,false]);
  }
  const change3=()=>{
    setState([false,false,false,true,false]);
  }
  const change4=()=>{
    setState([false,false,false,false,true]);
  }
  return (
    <>
      <div className="row m-0 p-0">
        <div className="col-12 m-0 p-0 d-lg-flex d-block" id="port">
          <div className="p-5 m-5 text-light">
            <h1 className="display-3 fw-bold">Portfolio</h1>
            <h1>Our Works</h1>
          </div>
          <div className="img_head d-lg-flex d-none">
            <img src="images/portfolio.webp" className="img-fluid" alt="" />
          </div>
        </div>
      </div>

      <div className="row m-0 p-5 mt-5">
        <div className="col-lg-2 col-md-3 col-sm-6 col-12  m-lg-0 m-2">
          <button className="btn btn_2 w-100 px-0" onClick={()=>change1()}>Communication</button>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-12 m-lg-0 m-2">
          <button className="btn btn_2 w-100 px-0"onClick={()=>change2()}>Education & Learning</button>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-12 m-lg-0 m-2">
          <button className="btn btn_2 w-100 px-0"onClick={()=>change3()}>Healthcare</button>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 col-12 m-lg-0 m-2">
          <button className="btn btn_2 w-100 px-0"onClick={()=>change4()}>Quiz</button>
        </div>
        <div className="dropdown col-lg-2 col-md-3 col-sm-6 col-12 m-lg-0 m-2">
          <button
            className="dropdown-toggle btn btn_2 w-100"
            data-bs-toggle="dropdown"
          >
            Select Category
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item"onClick={()=>change1()}>Communication</li>
            <li className="dropdown-item"onClick={()=>change2()}>Education & Learning</li>
            <li className="dropdown-item"onClick={()=>change3()}>Healthcare</li>
            <li className="dropdown-item"onClick={()=>change4()}>Quiz</li>
          </ul>
        </div>
      </div>

      <div className="row m-0 p-0 m-0">
        <div className="col-12 m-0 p-0">
          <div className="row m-0 p-0">
            {state[0]
              ? arr.map((val) => {
                  return (
                    <>
                      <div
                        className="col-lg-4 col-md-6 col-12"
                        style={{ border: "15px solid #FFFFFF" }}
                      >
                        <PortCard img={val.img} nm={val.nm} des={val.des} />
                      </div>
                    </>
                  );
                })
              : null}
            {state[1]
              ? arr1.map((val) => {
                  return (
                    <>
                      <div
                        className="col-lg-4 col-md-6 col-12"
                        style={{ border: "15px solid #FFFFFF" }}
                      >
                        <PortCard img={val.img} nm={val.nm} des={val.des} />
                      </div>
                    </>
                  );
                })
              : null}
            {state[2]
              ? arr2.map((val) => {
                  return (
                    <>
                      <div
                        className="col-lg-4 col-md-6 col-12"
                        style={{ border: "15px solid #FFFFFF" }}
                      >
                        <PortCard img={val.img} nm={val.nm} des={val.des} />
                      </div>
                    </>
                  );
                })
              : null}
              {state[3]
              ? arr3.map((val) => {
                  return (
                    <>
                      <div
                        className="col-lg-4 col-md-6 col-12"
                        style={{ border: "15px solid #FFFFFF" }}
                      >
                        <PortCard img={val.img} nm={val.nm} des={val.des} />
                      </div>
                    </>
                  );
                })
              : null}
              {state[4]
              ? arr4.map((val) => {
                  return (
                    <>
                      <div
                        className="col-lg-4 col-md-6 col-12"
                        style={{ border: "15px solid #FFFFFF" }}
                      >
                        <PortCard img={val.img} nm={val.nm} des={val.des} />
                      </div>
                    </>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolios;
