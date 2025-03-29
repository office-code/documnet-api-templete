import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Codetext from "../components/codetext/codetext";
import code from "../json/code1.json"
import content from "../json/content.json"
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { ThreeDots } from "react-loader-spinner";
export default function Authentication() {
    const { promiseInProgress } = usePromiseTracker();

    const [jsonData, setJsonData] = useState(null);
    const [gettingtoken, setgettingtoken] = useState(null)
    const [gettingtokenexample, setgettingtokenexample] = useState(null)
    const [tokenexpried, settokenexpried] = useState(null)
    const [tokenexpiredexample, settokenexpiredexample] = useState(null)
    const [authcontent, setauthcontent] = useState([])

    useEffect(() => {
        trackPromise(
            new Promise((resolve) => {
                setTimeout(() => {
                    setJsonData(code.oauth[0])
                    setgettingtoken(code.gettingtoken[0])
                    settokenexpried(code.tokenexpired[0])
                    settokenexpiredexample(code.getRegions[0])
                    setgettingtokenexample(code.gettingtokenexample[0])
                    setauthcontent(content.authentication)
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
                            {authcontent.map((itemdata, index) => {
                                return (<div key={index}>
                                    <h4 className="h4-heading">{itemdata.titlename}</h4>
                                    {itemdata.pracontent.map((para, index) => (
                                        <p key={index} className="p-pera">{para}</p>
                                    ))}

                                    <h4 className="h4-heading mt-4">{itemdata.titlename1}</h4>
                                    {itemdata.pracontent1.map((para, index) => (
                                        <p key={index} className="p-pera">{para}</p>
                                    ))}
                                    <h4 className="h4-heading mt-4">{itemdata.titlename2}</h4>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="heading-box">
                                                {itemdata.pracontent2.map((para, index) => (
                                                    <p key={index} className="p-pera">{para}</p>
                                                ))}
                                            </div>
                                        </Col>

                                        <Col lg={6}>
                                            <div>
                                                <div className="url-but-box-1">
                                                    {jsonData ? <Codetext data={jsonData} /> : <p>Loading...</p>}
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <h4 className="h4-heading mt-4">{itemdata.titlename3}</h4>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="heading-box">
                                                {itemdata.pracontent3.map((para, index) => (
                                                    <p key={index} className="p-pera">{para}</p>
                                                ))}
                                                <div className="auth-pera-box">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th
                                                                    className="gold-premum-plas">Parameter</th>
                                                                <th
                                                                    className="gold-premum-plas">Type</th>
                                                                <th
                                                                    className="gold-premum-plas">
                                                                    Description
                                                                </th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className='error-t-body error-body-text'>client_id</td>
                                                                <td className='error-t-body-head error-body-text'>string</td>
                                                                <td className='error-t-body-title error-body-text'>Client Id</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='error-t-body error-body-text'>client_secret</td>
                                                                <td className='error-t-body-head error-body-text'>string</td>
                                                                <td className='error-t-body-title error-body-text'>Client secret</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='error-t-body error-body-text'>grant_type</td>
                                                                <td className='error-t-body-head error-body-text'>string</td>
                                                                <td className='error-t-body-title error-body-text'>Must be client_credentials.</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <p className="p-pera pt-4">Token will stay valid for the duration that was specified when creating the client/credentials.</p>
                                                <p className="p-pera pt-4">Example request</p>
                                                <div className="url-but-box-1">

                                                    {gettingtokenexample ? <Codetext data={gettingtokenexample} /> : <p>Loading...</p>}
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg={6}>
                                            <p className="p-pera">Example response</p>
                                            <div className="url-but-box-1">
                                                {gettingtoken ? <Codetext data={gettingtoken} /> : <p>Loading...</p>}

                                            </div>
                                        </Col>
                                    </Row>


                                    <h4 className="h4-heading mt-4">{itemdata.titlename4}</h4>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="heading-box">
                                                {itemdata.pracontent4.map((para, index) => (
                                                    <p key={index} className="p-pera">{para}</p>
                                                ))}

                                                <div className="url-but-box-1">
                                                    {tokenexpried ? <Codetext data={tokenexpried} /> : <p>Loading...</p>}

                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg={6}>
                                            <p className="p-pera">Example request</p>
                                            <div className="url-but-box-1">
                                                {tokenexpiredexample ? <Codetext data={tokenexpiredexample} /> : <p>Loading...</p>}

                                            </div>
                                        </Col>
                                    </Row>
                                </div>)
                            })}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
