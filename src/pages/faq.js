import React, { useState, useEffect } from "react";
import content from "../json/content.json"
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { ThreeDots } from "react-loader-spinner";
export default function FAQ() {

    const { promiseInProgress } = usePromiseTracker();

    const [contentdata, setcontentdata] = useState([])

    // useEffect(() => {
    //     trackPromise(
    //         setcontentdata(content.faq)
    //     )
    // }, [])

    useEffect(() => {
        trackPromise(
            new Promise((resolve) => {
                setTimeout(() => {
                    setcontentdata(content.faq);
                    resolve(); // ✅ Promise resolve karna zaroori hai
                }, 1000); // Simulated delay (1 second)
            })
        );
    }, []);
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
                                    <p className="error-heading-pra">1. {element.titlename1}</p>
                                    <ul>
                                        {element.pracontent1.map((para, index) => {
                                            return (<li key={index} className="p-pera">{para}</li>
                                            )
                                        })}

                                    </ul>

                                    <p className="error-heading-pra">2. {element.titlename2}</p>
                                    <ul>
                                        {element.pracontent2.map((para, index) => {
                                            return (<li key={index} className="p-pera">{para}</li>)
                                        })}
                                    </ul>

                                    <p className="error-heading-pra">3. {element.titlename3}</p>
                                    <ul>
                                        {element.pracontent3.map((para, index) => {
                                            return (<li key={index} className="p-pera">{para}</li>)
                                        })}
                                        <ul>
                                            <li className="p-pera">Use the Base64 format to generate the authorization token, the result will look similar to this string </li>
                                            <p className="p-pera">ZTE2NTEwY2xtNzI4Mi00YTx5LTg5OGItZGEwNTQ4ODlhMzNhOjg1MTg5NGQyM2E4ZDQxMW RhZGFmNxJmMzlkYWU5OcY4</p>
                                        </ul>
                                    </ul>

                                    <p className="error-heading-pra">4. {element.titlename4}</p>
                                    <ul>
                                        {element.pracontent4.map((para, index) => {
                                            return (<li key={index} className="p-pera">{para}</li>)
                                        })}
                                    </ul>

                                    <p className="error-heading-pra">5. {element.titlename5}</p>
                                    <ul>
                                        {element.pracontent5.map((para, index) => {
                                            return (<li key={index} className="p-pera">{para}</li>)
                                        })}
                                    </ul>

                                    {/**************  ERROR ***************/}
                                    <h4 className="h4-heading">Error</h4>
                                    {element.pracontentone.map((para, index) => {
                                        return (<p key={index} className="p-pera">{para}</p>)
                                    })}

                                    <p className="error-heading-pra">6. {element.titlename6}</p>
                                    <ul>
                                        {element.pracontent6.map((para, index) => {
                                            return (<li key={index} className="p-pera">{para}</li>)
                                        })}
                                    </ul>
                                </div>)
                            })}

                            {/**************  CALLBACK ***************/}
                            <h4 className="h4-heading">Callback</h4>
                            <p className="p-pera">Transfer is used for transferring money from the provider account to a customer.</p>
                            <p className="error-heading-pra">7. What are the common error codes you may expect?</p>
                            <ul>
                                <li className="p-pera">The error codes are categorized as follows (Common Error Codes, Preapproval Error Codes, RequestToPay Error Codes, Transfer Error Codes and Validate Account Holder Error Codes)</li>
                                <li className="p-pera">The API User and API Key are used to grant access to the wallet system applicable to a specific country</li>
                                <li className="p-pera">More information on error codes can be found under the documentation section</li>
                            </ul>

                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
