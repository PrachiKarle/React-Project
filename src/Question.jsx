import React from "react";

const queAns = [
    {
      q: "What do you mean by a pre-calculated cost?",
      a: "The total estimated cost of your app calculated in advance after considering common requirements. This cost is estimated based on the type of service, platforms, number of devices, features, etc.",
    },
    {
      q: "Do Redbytes include a timeline for app development?",
      a: "Yes. We provide the overall timeline, and the number of hours required for each stage of app development. These development hours are also estimated based on the complexity & features included in your app.",
    },
    {
      q: "Is pre-calculated cost the final cost?",
      a: "No. This pre-calculated cost is not the final cost. This is an estimated cost which is more than 80% accurate on the standard requirements. The final cost can vary depending on changes in your requirements.",
    },
    {
      q: "Are these features typical for a full-fledged app?",
      a: "No. Each app can have diverse features with varying complexity. We have included features which are required for an app to compete at the industry standard level.",
    },
  ];

const Question = () => {
  return (
    <>
      <h1 className="fw-bold">Frequently Asked Questions</h1>
      <div className="col-12 m-0 p-0">
        <div className="row m-0 p-5">
          {queAns.map((val) => {
            return (
              <>
                <div
                  className="col-lg-6 col-12 text-center"
                  style={{ border: "10px solid white" }}
                >
                  <h5 className="fw-bold">{val.q}</h5>
                  <h6 className="fw-normal">{val.a}</h6>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Question;
