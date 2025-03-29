import React, { useState, useEffect } from "react";
import content from "../json/content.json";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { ThreeDots } from "react-loader-spinner";

export default function Integration() {
  const [contentpera, setContentPera] = useState([]);
  const { promiseInProgress } = usePromiseTracker();


  useEffect(() => {
    trackPromise(
      new Promise((resolve) => {
        setTimeout(() => {
          setContentPera(content.introduction[0].pracontent || []);
          resolve(); // ✅ Promise resolve karna zaroori hai
        }, 1000); // Simulated delay (1 second)
      })
    );
  }, []);

  return (
    <div className="box-dashboard-r">
      <div className="dashboard-wrapper">
        <div className="container">
          <h4 className="h4-heading">Integration</h4>
          <div className="heading-box">
            {promiseInProgress === true ? (
              <div
                className="spinner"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignIitems: "center",
                  height: "50px",
                }}
              >
                <ThreeDots
                  height="80"
                  width="80"
                  color="#fc7a34"
                  ariaLabel="circles-loading"
                  wrapperStyle={{}}
                  wrapperclassName=""
                  visible={true}
                />
              </div>
            ) : (
              <>
                {contentpera.map((para, index) => (
                  <p key={index} className="p-pera">{para}</p>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
