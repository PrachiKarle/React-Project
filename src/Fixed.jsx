import React from "react";
import { useEffect,useState } from "react";

const Fixed = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  

  return (
    <>
     

      {/* back to top */}
      <div className="top-to-btm">
        {showTopBtn && (
          <>
            <div
              id="div"
              className="bg-danger text-light fw-bold px-3 py-2"
              style={{
                borderRadius: "15px",
                position: "fixed",
                right: "20px",
                bottom: "80px",
              }}
            >
              <a href="#header">
                <i
                  class="bi bi-chevron-up text-light fw-bold"
                  style={{ fontSize: "25px" }}
                ></i>
              </a>
            </div>
          </>
        )}
      </div>

      {/* whatsapp */}
      <div
        className="d-flex justify-content-center align-items-center px-3 py-2 bg-success"
        style={{
          borderRadius: "50%",
          position: "fixed",
          right: "20px",
          bottom: "20px",
        }}
      >
        <i
          className="bi bi-whatsapp text-light fw-bold"
          style={{ fontSize: "25px" }}
        ></i>
      </div>
    </>
  );
};

export default Fixed;
