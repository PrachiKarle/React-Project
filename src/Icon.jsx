import React from "react";
import Service2 from "./Service2";
const arr1 = [
  {
    cls: "bi bi-calendar3-fill",
    t: "11+ Years",
    st: "of App Development",
  },
  {
    cls: "bi bi-code-slash",
    t: "100+",
    st: "Developers",
  },
  {
    cls: "bi bi-phone-fill",
    t: "351+",
    st: "Apps",
  },
  {
    cls: "bi bi-people-fill",
    t: "301+",
    st: "Clients",
  },
  {
    cls: "bi bi-download",
    t: "3M+",
    st: "Install",
  },
  {
    cls: "bi bi-bell",
    t: "2M+",
    st: "Subscribe",
  },
];

const Icon = () => {
  return (
    <>
      {/* icons */}
      <div className="col-12 m-0">
        <div className="row px-5" style={{ backgroundColor: "#F0F3F6" }}>
          {arr1.map((val) => {
            return (
              <>
                <div className="col-lg-2 col-md-4 col-sm-6 p-4 ">
                  <Service2 cls={val.cls} t={val.t} st={val.st} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Icon;
