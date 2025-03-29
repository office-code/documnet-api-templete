import React, { useState, useEffect } from "react";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { ThreeDots } from "react-loader-spinner";
import content from "../json/content.json"
export default function Errors() {
    const [contentdata, setcontentdata] = useState([])
    const { promiseInProgress } = usePromiseTracker();

    useEffect(() => {
        trackPromise(
            new Promise((resolve) => {
                setTimeout(() => {
                    setcontentdata(content.error)
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
                                return (<div key={index}>
                                    <h4 className="h4-heading">{itemdata.titlename}</h4>
                                    <div className="heading-box">
                                        {itemdata.pracontent.map((para, index) => (
                                            <p key={index} className="p-pera">{para}</p>
                                        ))}                    </div>
                                    <div className="auth-pera-box">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th
                                                        className="gold-premum-plas">
                                                        HTTP Code
                                                    </th>
                                                    <th
                                                        className="gold-premum-plas">
                                                        Error Response Code
                                                    </th>
                                                    <th
                                                        className="gold-premum-plas">
                                                        Description
                                                    </th>
                                                    <th
                                                        className="gold-premum-plas">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr >
                                                    <td className='error-t-body error-body-text'>400</td>
                                                    <td className='error-t-body-head error-body-text'>REQUEST REJECTED/ BAD REQUEST</td>
                                                    <td className='error-t-body-title error-body-text'>Bad request. Request does not follow the specification.</td>
                                                    <td className='error-t-body-title error-body-text'>
                                                        This relates to any of the below scenarios:
                                                        - Incorrect/wrong values in the headers, and/or the X-ref ID does not meet UUID Version 4.
                                                        - Inputting a Body in an API that is not supported e.g. /Token API
                                                        - Having unsupported special characters in the Body request for example an apostrophe (').
                                                        - Invalid currency â€“ needs to match the target environment currency.
                                                        - More than 160 characters in the note and message; explore utilizing the notification API for increased number of characters.
                                                        - The URL posted to needs to reviewed e.g. incorrect number of forward slashes (///).</td>
                                                </tr>
                                                <tr>
                                                    <td className='error-t-body error-body-text'>401</td>
                                                    <td className='error-t-body-head error-body-text'>ACCESS DENIED DUE TO INVALID SUBSCRIPTION KEY</td>
                                                    <td className='error-t-body-title error-body-text'> SUBSCRIPTION KEY	Authentication failed.Credentials invalid.Header Ocp-APIM-Subscription-Key value is incorrect.</td>
                                                    <td className='error-t-body-title error-body-text'>Check the User Profile Section to verify the related product subscription key is used. Collection, Disbursement and Remittance have different subscription keys. If the primary key doesnâ€™t work, try the secondary key. Contact MTN support if both provided keys aren't working. Sandbox subscription key are located in https://momodeveloper.mtn.com/developer Production subscription key are located in https://momoapi.mtn.com/developer</td>
                                                </tr>

                                                <tr>
                                                    <td className='error-t-body error-body-text'>403</td>
                                                    <td className='error-t-body-head error-body-text'>FORBIDDEN IP</td>
                                                    <td className='error-t-body-title error-body-text'>Authorization failed. IP not authorized to utilize Disbursement API.</td>
                                                    <td className='error-t-body-title error-body-text'>Authorization failed. IP not authorized to utilize Disbursement API.</td>

                                                </tr>
                                                <tr>
                                                    <td className='error-t-body error-body-text'>404</td>
                                                    <td className='error-t-body-head error-body-text'>RESOURCE NOT FOUND</td>
                                                    <td className='error-t-body-title error-body-text'>RESOURCE NOT FOUND	Reference ID not found. Requested resource does not exist. Predominantly occurs with Get Status API and implies that the requested reference ID does not exist. This results in the Request to Debit or Transfer transaction being unsuccessful.</td>
                                                    <td className='error-t-body-title error-body-text'>Check if the original request to pay or the transfer (disbursement) operation was successful with response code 202.</td>

                                                </tr>
                                                <tr>
                                                    <td className='error-t-body error-body-text'>409</td>
                                                    <td className='error-t-body-head error-body-text'>RESOURCE_ALREADY_EXIST</td>
                                                    <td className='error-t-body-title error-body-text'>Duplicated Reference ID. Every request must have a unique reference ID; using an ID of the previous request will result in this error response</td>
                                                    <td className='error-t-body-title error-body-text'>Check X-Reference ID used is unique and is in UUID V4 format</td>
                                                </tr>
                                                <tr>
                                                    <td className='error-t-body error-body-text'>500, 502, 503, 504</td>
                                                    <td className='error-t-body-head error-body-text'>SERVER ERRORS</td>
                                                    <td className='error-t-body-title error-body-text'>Something went wrong on Stripe’s end. (These are rare.)</td>
                                                    <td className='error-t-body-title error-body-text'>Contact your MTN Account Manager.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <h4 className="h4-heading mt-5">{itemdata.titlename1}</h4>
                                    <p className="error-heading-pra">{itemdata.titlename2}</p>

                                    <div className="auth-pera-box">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th
                                                        className="gold-premum-plas">
                                                        Type
                                                    </th>

                                                    <th
                                                        className="gold-premum-plas">
                                                        Description
                                                    </th>
                                                    <th
                                                        className="gold-premum-plas">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr >
                                                    <td className='error-t-body-head error-body-text'>INTERNAL_PROCESSING_ERROR</td>
                                                    <td className='error-t-body-title error-body-text'>Default or Generic error code used when there is no specific error mapping. This predominantly occurs due to insufficient customer funds to complete the transaction.
                                                        Also related to service denied or Wallet Platform is not reachable</td>
                                                    <td className='error-t-body-title error-body-text'>
                                                        This relates to any of the below scenarios:
                                                        - Incorrect/wrong values in the headers, and/or the X-ref ID does not meet UUID Version 4.
                                                        - Inputting a Body in an API that is not supported e.g. /Token API
                                                        - Having unsupported special characters in the Body request for example an apostrophe (').
                                                        - Invalid currency â€“ needs to match the target environment currency.
                                                        - More than 160 characters in the note and message; explore utilizing the notification API for increased number of characters.
                                                        - The URL posted to needs to reviewed e.g. incorrect number of forward slashes (///).</td>
                                                </tr>
                                                <tr>
                                                    <td className='error-t-body-head error-body-text'>PAYEE_NOT_FOUND</td>
                                                    <td className='error-t-body-title error-body-text'>The MSISDN being paid to is invalid.</td>
                                                    <td className='error-t-body-title error-body-text'>Check the User Profile Section to verify the related product subscription key is used. Collection, Disbursement and Remittance have different subscription keys. If the primary key doesnâ€™t work, try the secondary key. Contact MTN support if both provided keys aren't working. Sandbox subscription key are located in https://momodeveloper.mtn.com/developer Production subscription key are located in https://momoapi.mtn.com/developer</td>
                                                </tr>

                                                <tr>
                                                    <td className='error-t-body-head error-body-text'>PAYEE_NOT_FOUND</td>
                                                    <td className='error-t-body-title error-body-text'>PAYER_NOT_FOUMSISDN of the number from whom the money was requested in invalid.</td>
                                                    <td className='error-t-body-title error-body-text'>Authorization failed. IP not authorized to utilize Disbursement API.</td>

                                                </tr>
                                                <tr>
                                                    <td className='error-t-body-head error-body-text'>COULD_NOT_PERFORM_TRANSACTION</td>
                                                    <td className='error-t-body-title error-body-text'>This can be attributed to transaction timeout. This predominantly occurs with a delay to approve a transaction within the given time frame (5 minutes).</td>
                                                    <td className='error-t-body-title error-body-text'>Check if the original request to pay or the transfer (disbursement) operation was successful with response code 202.</td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <p className="error-heading-pra mt-3">{itemdata.titlename3}</p>

                                    <div className="auth-pera-box">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th
                                                        className="gold-premum-plas">
                                                        Type
                                                    </th>

                                                    <th
                                                        className="gold-premum-plas">
                                                        Description
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr >
                                                    <td className='error-t-body-head error-body-text'>NOT_ALLOWED</td>
                                                    <td className='error-t-body-title error-body-text'>Default or Generic error code used when there is no specific error mapping. This predominantly occurs due to insufficient customer funds to complete the transaction.
                                                        Also related to service denied or Wallet Platform is not reachable</td>
                                                </tr>
                                                <tr>
                                                    <td className='error-t-body-head error-body-text'>NOT_ALLOWED_TARGET_ENVIRONMENT</td>
                                                    <td className='error-t-body-title error-body-text'>The MSISDN being paid to is invalid.</td>
                                                </tr>

                                                <tr>
                                                    <td className='error-t-body-head error-body-text'>INVALID_CALLBACK_URL_HOST</td>
                                                    <td className='error-t-body-title error-body-text'>PAYER_NOT_FOUMSISDN of the number from whom the money was requested in invalid.</td>

                                                </tr>
                                                <tr>
                                                    <td className='error-t-body-head error-body-text'>INVALID_CURRENCY</td>
                                                    <td className='error-t-body-title error-body-text'>This can be attributed to transaction timeout. This predominantly occurs with a delay to approve a transaction within the given time frame (5 minutes).</td>

                                                </tr>
                                                <tr>
                                                    <td className='error-t-body-head error-body-text'>SERVICE_UNAVAILABLE</td>
                                                    <td className='error-t-body-title error-body-text'>This can be attributed to transaction timeout. This predominantly occurs with a delay to approve a transaction within the given time frame (5 minutes).</td>

                                                </tr>
                                                <tr>
                                                    <td className='error-t-body-head error-body-text'>NOT_ENOUGH_FUNDS</td>
                                                    <td className='error-t-body-title error-body-text'>This can be attributed to transaction timeout. This predominantly occurs with a delay to approve a transaction within the given time frame (5 minutes).</td>

                                                </tr>
                                                <tr>
                                                    <td className='error-t-body-head error-body-text'>PAYER_LIMIT_REACHED</td>
                                                    <td className='error-t-body-title error-body-text'>This can be attributed to transaction timeout. This predominantly occurs with a delay to approve a transaction within the given time frame (5 minutes).</td>

                                                </tr>
                                                <tr>
                                                    <td className='error-t-body-head error-body-text'>PAYEE_NOT_ALLOWED_TO_RECEIVE</td>
                                                    <td className='error-t-body-title error-body-text'>This can be attributed to transaction timeout. This predominantly occurs with a delay to approve a transaction within the given time frame (5 minutes).</td>

                                                </tr>
                                                <tr>
                                                    <td className='error-t-body-head error-body-text'>PAYMENT_NOT_APPROVED</td>
                                                    <td className='error-t-body-title error-body-text'>This can be attributed to transaction timeout. This predominantly occurs with a delay to approve a transaction within the given time frame (5 minutes).</td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>)
                            })}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}



















































