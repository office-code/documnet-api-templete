import React, { useState, useEffect } from "react";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { ThreeDots } from "react-loader-spinner";
import image from "../assets/images/subscriptions-DocContnt.png"
import content from "../json/content.json"
export default function GettingStarted() {
    const [contentdata, setcontentdata] = useState([])
    const { promiseInProgress } = usePromiseTracker();


    useEffect(() => {
        trackPromise(
            new Promise((resolve) => {
                setTimeout(() => {
                    setcontentdata(content.gettingstarted)
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
                            {contentdata.map((itemdata, index) => {
                                return (
                                    <div key={index}>
                                        <h4 className="h4-heading">{itemdata.titlename}</h4>
                                        {itemdata.pracontent.map((para, index) => (
                                            <p key={index} className="p-pera">{para}</p>
                                        ))}

                                        <ul>
                                            {itemdata.listpra.map((para, index) => (
                                                <li className="p-pera" key={index}>{para}</li>
                                            ))}
                                        </ul>
                                        <div>
                                            <h4 className="h4-heading">{itemdata.titlename1}</h4>
                                            <h4 className="h4-heading">{itemdata.titlename2}</h4>
                                            {itemdata.pracontent2.map((para, index) => (
                                                <p key={index} className="p-pera">{para}</p>
                                            ))}

                                            <div className="img-box">
                                                <img src={image} className="" />
                                            </div>

                                            <h4 className="h4-heading">{itemdata.titlename3}</h4>
                                            {itemdata.pracontent3.map((para, index) => (
                                                <p key={index} className="p-pera">{para}</p>
                                            ))}                                </div>
                                    </div>
                                )
                            }, [])}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

