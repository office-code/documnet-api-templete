import React, { useState, useEffect } from "react";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { ThreeDots } from "react-loader-spinner";
import image from "../assets/images/logo2.png"
import content from "../json/content.json"
export default function Brandguidelines() {
    const [contentdata, setcontentdata] = useState([])
    const { promiseInProgress } = usePromiseTracker();


    useEffect(() => {
        trackPromise(
            new Promise((resolve) => {
                setTimeout(() => {
                    setcontentdata(content.brandguidelines)
                    resolve(); // ✅ Promise resolve karna zaroori hai
                }, 1000); // Simulated delay (1 second)
            })
        );
    }, [])

    return (
        <div className="box-dashboard-r">
            <div className="dashboard-wrapper">
                <div className="container">
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
                            {contentdata.map((element, index) => {
                                return (<div key={index}>
                                    <h4 className="h4-heading">{element.titlename}</h4>
                                    <div className="img-box-1">
                                        <img src={image} className="" />
                                    </div>
                                    {element.pracontent.map((para, index) => (
                                        <p key={index} className="p-pera">{para}</p>
                                    ))}
                                    <ul>
                                        {element.listcontent.map((para, index) => (
                                            <li key={index} className="p-pera">{para}</li>
                                        ))}

                                        <ul>
                                            {element.chalidcontent.map((para, index) => (
                                                <li key={index} className="p-pera">{para}</li>
                                            ))}
                                        </ul>
                                    </ul>
                                    {element.pracontent.map((para, index) => (
                                        <p key={index} className="p-pera">{para}</p>
                                    ))}
                                </div>)
                            })}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

